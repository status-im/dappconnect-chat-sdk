import { PageDirection } from 'js-waku'

import { containsOnlyEmoji } from '../helpers/contains-only-emoji'
import {
  AudioMessage,
  ChatMessage as ChatMessageProto,
  DeleteMessage,
  EditMessage,
  ImageType,
} from '../protos/chat-message'
import { EmojiReaction } from '../protos/emoji-reaction'
import { generateKeyFromPassword } from '../utils/generate-key-from-password'
import { idToContentTopic } from '../utils/id-to-content-topic'
import { getReactions } from './community/get-reactions'

import type { CommunityChat } from '../proto/communities/v1/communities'
import type { ImageMessage } from '../protos/chat-message'
import type { MessageType } from '../protos/enums'
import type { Client } from './client'
import type { Community } from './community/community'
import type { Reactions } from './community/get-reactions'
import type { WakuMessage } from 'js-waku'

export type ChatMessage = ChatMessageProto & {
  messageId: string
  pinned: boolean
  reactions: Reactions
  chatUuid: string
  signer: string
  responseToMessage?: ChatMessage
  edittedClock?: bigint
  pinnedClock?: bigint
}

type FetchedMessage = { messageId: string; timestamp?: Date }

export class Chat {
  private readonly client: Client

  public readonly uuid: string
  public readonly id: string
  public readonly contentTopic: string
  public readonly type: MessageType.COMMUNITY_CHAT
  public readonly symmetricKey: Uint8Array
  public description: CommunityChat
  public readonly chatCallbacks: Set<(description: CommunityChat) => void>
  #messages: Map<string, ChatMessage>
  #editTextEvents: Map<string, Pick<ChatMessage, 'clock' | 'signer' | 'text'>>
  #pinEvents: Map<string, Pick<ChatMessage, 'clock' | 'pinned'>>
  #reactEvents: Map<string, Pick<ChatMessage, 'clock' | 'reactions'>>
  #deleteEvents: Map<string, Pick<ChatMessage, 'clock' | 'signer'>>
  #fetchingMessages?: boolean
  #previousFetchedStartTime?: Date
  #oldestFetchedMessage?: FetchedMessage
  public readonly messageCallbacks: Set<(messages: ChatMessage[]) => void>

  constructor(options: {
    client: Client
    uuid: string
    id: string
    contentTopic: string
    type: MessageType.COMMUNITY_CHAT
    symmetricKey: Uint8Array
    description: CommunityChat
  }) {
    this.client = options.client

    this.uuid = options.uuid
    this.id = options.id
    this.contentTopic = options.contentTopic
    this.type = options.type
    this.symmetricKey = options.symmetricKey
    this.description = options.description

    this.chatCallbacks = new Set()
    this.#messages = new Map()
    this.#editTextEvents = new Map()
    this.#pinEvents = new Map()
    this.#reactEvents = new Map()
    this.#deleteEvents = new Map()
    this.messageCallbacks = new Set()
  }

  public static create = async (
    community: Community,
    client: Client,
    uuid: string,
    type: MessageType.COMMUNITY_CHAT,
    description: CommunityChat
  ) => {
    const id = `${community.publicKey}${uuid}`
    const contentTopic = idToContentTopic(id)
    const symmetricKey = await generateKeyFromPassword(id)

    return new Chat({
      client,
      uuid,
      id,
      contentTopic,
      type,
      symmetricKey,
      description,
    })
  }

  /**
   * Returns chat messages soreted in ascending order and reply references resolved.
   */
  public getMessages = () => {
    const messages: ChatMessage[] = []

    for (const message of this.#messages.values()) {
      // resolve references
      const referencedMessage = this.#messages.get(message.responseTo)
      if (referencedMessage) {
        message.responseToMessage = referencedMessage
      }

      messages.push(message)
    }

    // sort
    messages.sort((a, b) => {
      if (a.clock < b.clock) {
        return -1
      }

      if (a.clock > b.clock) {
        return 1
      }

      return 0
    })

    return messages
  }

  public getMessage = (id: string) => {
    return this.#messages.get(id)
  }

  public onChange = (callback: (description: CommunityChat) => void) => {
    this.chatCallbacks.add(callback)

    return () => {
      this.chatCallbacks.delete(callback)
    }
  }

  public emitChange = (description: CommunityChat) => {
    this.chatCallbacks.forEach(callback => callback(description))
  }

  public onMessage = (
    callback: (messages: ChatMessage[]) => void
  ): (() => void) => {
    this.messageCallbacks.add(callback)

    return () => {
      this.messageCallbacks.delete(callback)
    }
  }

  public fetchMessages = async (options: { start: Date }) => {
    const previousOldestMessage = this.#oldestFetchedMessage

    const startTime = options.start
    // nothing to fetch
    if (
      previousOldestMessage &&
      previousOldestMessage.timestamp &&
      previousOldestMessage.timestamp < options.start
    ) {
      return
    }

    let endTime: Date
    if (this.#previousFetchedStartTime) {
      endTime = this.#previousFetchedStartTime
    } else {
      endTime = new Date()
    }

    await this.client.waku.store.queryHistory([this.contentTopic], {
      timeFilter: {
        startTime: startTime,
        endTime: endTime,
      },
      pageSize: 50,
      // most recent page first
      pageDirection: PageDirection.BACKWARD,
      decryptionKeys: [this.symmetricKey],
      callback: (wakuMessages: WakuMessage[]) => {
        let index = wakuMessages.length

        this.#fetchingMessages = true
        // most recent message first
        while (--index >= 0) {
          this.client.handleWakuMessage(wakuMessages[index])
        }
        this.#fetchingMessages = false
      },
    })

    this.#previousFetchedStartTime = startTime

    // more chat messages not found
    if (
      previousOldestMessage &&
      this.#oldestFetchedMessage &&
      // same message
      previousOldestMessage.messageId === this.#oldestFetchedMessage.messageId
    ) {
      return
    }

    const messages = this.emitMessages()

    return messages
  }

  public emitMessages = () => {
    if (this.#fetchingMessages) {
      return
    }

    if (!this.#messages.size) {
      return
    }

    const messages = this.getMessages()

    this.messageCallbacks.forEach(callback => callback(messages))

    return messages
  }

  public handleChange = (description: CommunityChat) => {
    // state
    this.description = description

    // callback
    this.emitChange(description)
  }

  public handleNewMessage = (newMessage: ChatMessage, timestamp?: Date) => {
    // fetching in progress
    if (this.#fetchingMessages) {
      this.#oldestFetchedMessage = this.getOldestFetchedMessage(
        this.#oldestFetchedMessage,
        newMessage.messageId,
        timestamp
      )
    }

    // delete event received first
    const deletedEvent = this.#deleteEvents.get(newMessage.messageId)
    if (deletedEvent) {
      if (this.isAuthor(newMessage, deletedEvent.signer)) {
        return
      }

      // delete unathorized event from stash
      this.#deleteEvents.delete(newMessage.messageId)
    }

    // message already received
    const message = this.#messages.get(newMessage.messageId)
    if (message) {
      return
    }

    // action events received prior
    const editTextEvent = this.#editTextEvents.get(newMessage.messageId)
    if (editTextEvent) {
      if (this.isAuthor(newMessage, editTextEvent.signer)) {
        newMessage.text = editTextEvent.text
        newMessage.edittedClock = editTextEvent.clock
      }

      // finally, delete event from stash whether it was authorized or not
      this.#editTextEvents.delete(newMessage.messageId)
    }

    const pinEvent = this.#pinEvents.get(newMessage.messageId)
    if (pinEvent) {
      newMessage.pinned = pinEvent.pinned
      newMessage.pinnedClock = pinEvent.clock

      this.#pinEvents.delete(newMessage.messageId)
    }

    const reactEvent = this.#reactEvents.get(newMessage.messageId)
    if (reactEvent) {
      newMessage.reactions = reactEvent.reactions

      this.#reactEvents.delete(newMessage.messageId)
    }

    // state
    this.#messages.set(newMessage.messageId, newMessage)

    // callback
    this.emitMessages()
  }

  public handleEditedMessage = (
    messageId: string,
    text: string,
    clock: bigint,
    signerPublicKey: string
  ) => {
    const message = this.#messages.get(messageId)

    if (message && this.isAuthor(message, signerPublicKey)) {
      message.text = text

      this.emitMessages()

      return
    }

    const editTextEvent = this.#editTextEvents.get(messageId)
    if (!editTextEvent || editTextEvent.clock < clock) {
      this.#editTextEvents.set(messageId, {
        clock,
        signer: signerPublicKey,
        text,
      })
    }
  }

  public handleDeletedMessage = (
    messageId: string,
    clock: bigint,
    signerPublicKey: string
  ) => {
    const message = this.#messages.get(messageId)
    if (message && this.isAuthor(message, signerPublicKey)) {
      this.#messages.delete(messageId)
      this.#deleteEvents.set(messageId, { clock, signer: signerPublicKey })
      this.emitMessages()

      return
    }

    const deleteEvent = this.#deleteEvents.get(messageId)
    if (!deleteEvent || deleteEvent.clock > clock) {
      this.#deleteEvents.set(messageId, { clock, signer: signerPublicKey })
    }
  }

  public handlePinnedMessage = (
    messageId: string,
    clock: bigint,
    pinned?: boolean
  ) => {
    const message = this.#messages.get(messageId)
    if (message) {
      message.pinned = Boolean(pinned)
      message.pinnedClock = clock

      this.emitMessages()

      return
    }

    const pinEvent = this.#pinEvents.get(messageId)
    if (!pinEvent || pinEvent.clock < clock) {
      this.#pinEvents.set(messageId, {
        clock,
        pinned: Boolean(pinned),
      })
    }
  }

  public handleEmojiReaction = (
    messageId: string,
    reaction: EmojiReaction,
    clock: bigint,
    signerPublicKey: string
  ) => {
    const message = this.#messages.get(messageId)
    if (message) {
      const reactions = getReactions(
        reaction,
        message.reactions,
        signerPublicKey
      )
      message.reactions = reactions

      this.emitMessages()

      return
    }

    const reactEvent = this.#reactEvents.get(messageId)
    if (!reactEvent) {
      const reactions = getReactions(
        reaction,
        {
          THUMBS_UP: new Set<string>(),
          THUMBS_DOWN: new Set<string>(),
          LOVE: new Set<string>(),
          LAUGH: new Set<string>(),
          SAD: new Set<string>(),
          ANGRY: new Set<string>(),
        },
        signerPublicKey
      )

      this.#reactEvents.set(messageId, { clock, reactions })
    } else {
      const reactions = getReactions(
        reaction,
        reactEvent.reactions,
        signerPublicKey
      )

      this.#reactEvents.set(messageId, { clock, reactions })
    }
  }

  public sendTextMessage = async (text: string, responseTo?: string) => {
    if (text === '') {
      throw new Error('Text message cannot be empty')
    }

    const type = containsOnlyEmoji(text)
      ? ChatMessageProto.ContentType.EMOJI
      : ChatMessageProto.ContentType.TEXT_PLAIN

    // TODO: protos does not support optional fields :-(
    const payload = ChatMessageProto.encode({
      clock: BigInt(Date.now()),
      timestamp: BigInt(Date.now()),
      text,
      responseTo: responseTo ?? '',
      ensName: '',
      chatId: this.id,
      contentType: type,
      messageType: 'COMMUNITY_CHAT' as MessageType,
      sticker: { hash: '', pack: 0 },
      image: {
        type: ImageType.JPEG,
        payload: new Uint8Array([]),
      },
      audio: {
        type: AudioMessage.AudioType.AAC,
        payload: new Uint8Array([]),
        durationMs: BigInt(0),
      },
      community: new Uint8Array([]),
      grant: new Uint8Array([]),
      displayName: '',
    })

    await this.client.sendWakuMessage(
      'TYPE_CHAT_MESSAGE',
      payload,
      this.contentTopic,
      this.symmetricKey
    )
  }

  public sendImageMessage = async (image: ImageMessage) => {
    const payload = ChatMessageProto.encode({
      clock: BigInt(Date.now()),
      timestamp: BigInt(Date.now()),
      text: '',
      responseTo: '',
      ensName: '',
      chatId: this.id,
      messageType: 'COMMUNITY_CHAT' as MessageType,
      contentType: ChatMessageProto.ContentType.TEXT_PLAIN,
      sticker: { hash: '', pack: 0 },
      image: {
        type: image.type,
        payload: image.payload,
      },
      audio: {
        type: AudioMessage.AudioType.AAC,
        payload: new Uint8Array([]),
        durationMs: BigInt(0),
      },
      community: new Uint8Array([]),
      grant: new Uint8Array([]),
      displayName: '',
    })

    await this.client.sendWakuMessage(
      'TYPE_CHAT_MESSAGE',
      payload,
      this.contentTopic,
      this.symmetricKey
    )
  }

  public editMessage = async (messageId: string, text: string) => {
    if (!this.client.account) {
      throw new Error('Text message cannot be edited without a created account')
    }

    const message = this.#messages.get(messageId)

    if (!message) {
      throw new Error('Message not found')
    }

    if (!this.isAuthor(message, `0x${this.client.account.publicKey}`)) {
      throw new Error('Text message can only be edited by its author')
    }

    if (text === '') {
      throw new Error('Text message cannot be empty')
    }

    const payload = EditMessage.encode({
      clock: BigInt(Date.now()),
      text,
      messageId,
      chatId: this.id,
      grant: new Uint8Array([]),
      messageType: 'COMMUNITY_CHAT' as MessageType,
    })

    await this.client.sendWakuMessage(
      'TYPE_EDIT_MESSAGE',
      payload,
      this.contentTopic,
      this.symmetricKey
    )
  }

  public deleteMessage = async (messageId: string) => {
    if (!this.client.account) {
      throw new Error(
        'Text message cannot be deleted without a created account'
      )
    }

    const message = this.#messages.get(messageId)

    if (!message) {
      throw new Error('Message not found')
    }

    if (!this.isAuthor(message, `0x${this.client.account.publicKey}`)) {
      throw new Error('Text message can only be deleted by its author')
    }

    const payload = DeleteMessage.encode({
      clock: BigInt(Date.now()),
      messageId,
      chatId: this.id,
      grant: new Uint8Array([]),
      messageType: 'COMMUNITY_CHAT' as MessageType,
    })

    await this.client.sendWakuMessage(
      'TYPE_DELETE_MESSAGE',
      payload,
      this.contentTopic,
      this.symmetricKey
    )
  }

  public sendReaction = async (
    messageId: string,
    reaction: keyof ChatMessage['reactions']
  ) => {
    if (!this.client.account) {
      throw new Error('Account not initialized')
    }

    const message = this.#messages.get(messageId)

    if (!message) {
      throw new Error('Message not found')
    }

    const retracted = message.reactions[reaction].has(
      `0x${this.client.account.publicKey}`
    )

    const payload = EmojiReaction.encode({
      clock: BigInt(Date.now()),
      chatId: this.id,
      messageType: 'COMMUNITY_CHAT' as MessageType,
      messageId,
      type: reaction as EmojiReaction.Type,
      retracted,
      grant: new Uint8Array([]),
    })

    await this.client.sendWakuMessage(
      'TYPE_EMOJI_REACTION',
      payload,
      this.contentTopic,
      this.symmetricKey
    )
  }

  public isAuthor = (
    message: ChatMessage,
    signerPublicKey: string
  ): boolean => {
    return message.signer === signerPublicKey
  }

  private getOldestFetchedMessage(
    oldestMessage: FetchedMessage | undefined,
    messageId: string,
    messageTimestamp?: Date
  ): FetchedMessage {
    let message: FetchedMessage

    if (!oldestMessage) {
      message = {
        messageId: messageId,
        timestamp: messageTimestamp,
      }
    } else if (
      messageTimestamp &&
      oldestMessage.timestamp &&
      // is older
      messageTimestamp < oldestMessage.timestamp
    ) {
      message = {
        messageId: messageId,
        timestamp: messageTimestamp,
      }
    } else {
      message = oldestMessage
    }

    return message
  }
}
