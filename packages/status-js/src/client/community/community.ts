import { waku_message } from 'js-waku'

import { MessageType } from '~/protos/enums'
import { getDifferenceByKeys } from '~/src/helpers/get-difference-by-keys'
import { getObjectsDifference } from '~/src/helpers/get-objects-difference'

import { idToContentTopic } from '../../contentTopic'
import { createSymKeyFromPassword } from '../../encryption'
import { Chat } from '../chat'
import { Member } from '../member'

import type { Client } from '../../client'
import type {
  CommunityChat,
  CommunityDescription,
} from '~/src/proto/communities/v1/communities'

export class Community {
  private client: Client

  public publicKey: string
  private contentTopic!: string
  private symmetricKey!: Uint8Array
  public description!: CommunityDescription
  public chats: Map<string, Chat>
  #members: Map<string, Member>
  public callback: ((description: CommunityDescription) => void) | undefined

  constructor(client: Client, publicKey: string) {
    this.client = client
    this.publicKey = publicKey

    this.chats = new Map()
    this.#members = new Map()
  }

  public async start() {
    this.contentTopic = idToContentTopic(this.publicKey)
    this.symmetricKey = await createSymKeyFromPassword(this.publicKey)

    // Waku
    this.client.waku.store.addDecryptionKey(this.symmetricKey, {
      contentTopics: [this.contentTopic],
    })
    this.client.waku.relay.addDecryptionKey(this.symmetricKey, {
      contentTopics: [this.contentTopic],
    })

    // Community
    const description = await this.fetch()

    if (!description) {
      throw new Error('Failed to intiliaze Community')
    }

    this.description = description

    this.observe()
    this.addMembers(this.description.members)

    // Chats
    await this.observeChatMessages(this.description.chats)
  }

  // todo: rename this to chats when changing references in ui
  public get _chats() {
    return [...this.chats.values()]
  }

  public getChat(uuid: string) {
    return this.chats.get(uuid)
  }

  public get members() {
    return [...this.#members.values()]
  }

  public getMember(publicKey: string) {
    return this.#members.get(publicKey)
  }

  public fetch = async () => {
    await this.client.waku.store.queryHistory([this.contentTopic], {
      // oldest message first
      callback: wakuMessages => {
        let index = wakuMessages.length

        // most recent page first
        while (--index >= 0) {
          this.client.handleWakuMessage(wakuMessages[index])

          return this.description !== undefined
        }
      },
    })

    return this.description
  }

  private observe = () => {
    this.client.waku.relay.addObserver(this.client.handleWakuMessage, [
      this.contentTopic,
    ])
  }

  private observeChatMessages = async (
    chatDescriptions: CommunityDescription['chats']
  ) => {
    const chatPromises = Object.entries(chatDescriptions).map(
      async ([chatUuid, chatDescription]: [string, CommunityChat]) => {
        const chat = await Chat.create(
          this,
          this.client,
          chatUuid,
          MessageType.COMMUNITY_CHAT,
          chatDescription
        )
        const contentTopic = chat.contentTopic

        this.chats.set(chatUuid, chat)

        this.client.waku.relay.addDecryptionKey(chat.symmetricKey, {
          method: waku_message.DecryptionMethod.Symmetric,
          contentTopics: [contentTopic],
        })

        return contentTopic
      }
    )

    const contentTopics = await Promise.all(chatPromises)

    this.client.waku.relay.addObserver(
      this.client.handleWakuMessage,
      contentTopics
    )
  }

  private unobserveChatMessages = (
    chatDescription: CommunityDescription['chats']
  ) => {
    const contentTopics = Object.keys(chatDescription).map(chatUuid => {
      const chat = this.chats.get(chatUuid)
      const contentTopic = chat!.contentTopic

      this.chats.delete(chatUuid)

      return contentTopic
    })

    this.client.waku.relay.deleteObserver(
      this.client.handleWakuMessage,
      contentTopics
    )
  }

  private addMembers = (members: CommunityDescription['members']) => {
    for (const publicKey of Object.keys(members)) {
      const member = new Member(publicKey)
      this.#members.set(publicKey, member)
    }
  }

  private removeMembers = (ids: string[]) => {
    for (const id of ids) {
      this.#members.delete(id)
    }
  }

  public handleDescription = (description: CommunityDescription) => {
    if (this.description) {
      // already handled
      if (this.description.clock >= description.clock) {
        return
      }

      // Chats
      // observe
      const removedChats = getDifferenceByKeys(
        this.description.chats,
        description.chats
      )
      if (Object.keys(removedChats).length) {
        this.unobserveChatMessages(removedChats)
      }

      const addedChats = getDifferenceByKeys(
        description.chats,
        this.description.chats
      )
      if (Object.keys(addedChats).length) {
        this.observeChatMessages(addedChats)
      }

      // TODO: migrate chats to new format
      // const chats = getObjectsDifference(
      //   this.description.chats,
      //   description.chats
      // )

      // this.observeChatMessages(chats.added)
      // this.unobserveChatMessages(chats.removed)

      const members = getObjectsDifference(
        this.description.members,
        description.members
      )

      this.addMembers(members.added)
      this.removeMembers(members.removed)
    }

    // Community
    // state
    this.description = description

    // callback
    this.callback?.(this.description)

    // Chats
    // handle
    Object.entries(this.description.chats).forEach(
      ([chatUuid, chatDescription]) =>
        this.chats.get(chatUuid)?.handleChange(chatDescription)
    )
  }

  public onChange = (callback: (description: CommunityDescription) => void) => {
    this.callback = callback

    return () => {
      this.callback = undefined
    }
  }
}
