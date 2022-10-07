import { bytesToHex } from 'ethereum-cryptography/utils'

import { CommunityDescription } from '../../proto/communities/v1/communities'
import { ApplicationMetadataMessage } from '../../protos/application-metadata-message'
import {
  ChatMessage,
  DeleteMessage,
  EditMessage,
  MessageType,
} from '../../protos/chat-message'
import { EmojiReaction } from '../../protos/emoji-reaction'
import { PinMessage } from '../../protos/pin-message'
import { ProtocolMessage } from '../../protos/protocol-message'
import { isClockValid } from '../../utils/is-clock-valid'
import { payloadToId } from '../../utils/payload-to-id'
import { recoverPublicKey } from '../../utils/recover-public-key'
import { getChatUuid } from './get-chat-uuid'
import { mapChatMessage } from './map-chat-message'

import type { Account } from '../account'
import type { Client } from '../client'
import type { Community } from './community'
import type { WakuMessage } from 'js-waku'

export function handleWakuMessage(
  wakuMessage: WakuMessage,
  // state
  client: Client,
  community: Community,
  account?: Account
): void {
  // decode (layers)
  // validate
  if (!wakuMessage.payload) {
    return
  }

  if (!wakuMessage.signaturePublicKey) {
    return
  }

  if (!wakuMessage.timestamp) {
    return
  }

  let messageToDecode = wakuMessage.payload
  let decodedProtocol
  try {
    decodedProtocol = ProtocolMessage.decode(messageToDecode)
    if (decodedProtocol) {
      messageToDecode = decodedProtocol.publicMessage
    }
  } catch {
    // eslint-disable-next-line no-empty
  }

  const decodedMetadata = ApplicationMetadataMessage.decode(messageToDecode)
  if (!decodedMetadata.payload) {
    return
  }
  messageToDecode = decodedMetadata.payload

  const signerPublicKeyBytes = recoverPublicKey(
    decodedMetadata.signature,
    decodedMetadata.payload
  )

  const messageId = payloadToId(
    decodedProtocol?.publicMessage ?? wakuMessage.payload,
    signerPublicKeyBytes
  )
  const messageTimestamp = wakuMessage.timestamp
  const signerPublicKey = `0x${bytesToHex(signerPublicKeyBytes)}`

  // already handled
  if (client.wakuMessages.has(messageId)) {
    return
  }

  client.wakuMessages.add(messageId)

  try {
    // decode, map and handle (events)
    switch (decodedMetadata.type) {
      case ApplicationMetadataMessage.Type.TYPE_COMMUNITY_DESCRIPTION: {
        // decode
        const decodedPayload = CommunityDescription.decode(messageToDecode)

        // validate
        if (!isClockValid(BigInt(decodedPayload.clock), messageTimestamp)) {
          return
        }

        if (!community.isOwner(signerPublicKey)) {
          return
        }

        // handle (state and callback)
        community.handleDescription(decodedPayload)
        community.setClock(BigInt(decodedPayload.clock))

        account?.updateMembership(community)

        break
      }

      case ApplicationMetadataMessage.Type.TYPE_CHAT_MESSAGE: {
        // decode
        const decodedPayload = ChatMessage.decode(messageToDecode)

        if (!isClockValid(BigInt(decodedPayload.clock), messageTimestamp)) {
          return
        }

        switch (decodedPayload.messageType) {
          case MessageType.COMMUNITY_CHAT: {
            if (!community.isMember(signerPublicKey)) {
              return
            }

            const chatUuid = getChatUuid(decodedPayload.chatId)
            const chat = community.chats.get(chatUuid)

            if (!chat) {
              return
            }

            // map
            const chatMessage = mapChatMessage(decodedPayload, {
              messageId,
              chatUuid,
              signerPublicKey,
              community,
              chat,
            })

            // handle
            chat.handleNewMessage(chatMessage, messageTimestamp)
            chat.setClock(decodedPayload.clock)

            break
          }

          default: {
            break
          }
        }

        break
      }

      case ApplicationMetadataMessage.Type.TYPE_EDIT_MESSAGE: {
        const decodedPayload = EditMessage.decode(messageToDecode)

        if (!isClockValid(BigInt(decodedPayload.clock), messageTimestamp)) {
          return
        }

        switch (decodedPayload.messageType) {
          case MessageType.COMMUNITY_CHAT: {
            if (!community.isMember(signerPublicKey)) {
              return
            }

            const messageId = decodedPayload.messageId
            const chatUuid = getChatUuid(decodedPayload.chatId)
            const chat = community.chats.get(chatUuid)

            if (!chat) {
              return
            }

            chat.handleEditedMessage(
              messageId,
              decodedPayload.text,
              decodedPayload.clock,
              signerPublicKey
            )
            chat.setClock(decodedPayload.clock)

            break
          }

          default: {
            break
          }
        }

        break
      }

      case ApplicationMetadataMessage.Type.TYPE_DELETE_MESSAGE: {
        const decodedPayload = DeleteMessage.decode(messageToDecode)

        if (!isClockValid(BigInt(decodedPayload.clock), messageTimestamp)) {
          return
        }

        switch (decodedPayload.messageType) {
          case MessageType.COMMUNITY_CHAT: {
            if (!community.isMember(signerPublicKey)) {
              return
            }

            const messageId = decodedPayload.messageId
            const chatUuid = getChatUuid(decodedPayload.chatId)
            const chat = community.chats.get(chatUuid)

            if (!chat) {
              return
            }

            chat.handleDeletedMessage(
              messageId,
              decodedPayload.clock,
              signerPublicKey
            )
            chat.setClock(decodedPayload.clock)

            break
          }

          default: {
            break
          }
        }

        break
      }

      case ApplicationMetadataMessage.Type.TYPE_PIN_MESSAGE: {
        const decodedPayload = PinMessage.decode(messageToDecode)

        if (!isClockValid(BigInt(decodedPayload.clock), messageTimestamp)) {
          return
        }

        switch (decodedPayload.messageType) {
          case MessageType.COMMUNITY_CHAT: {
            if (!community.isMember(signerPublicKey)) {
              return
            }

            const messageId = decodedPayload.messageId
            const chatUuid = getChatUuid(decodedPayload.chatId)
            const chat = community.chats.get(chatUuid)

            if (!chat) {
              return
            }

            chat.handlePinnedMessage(
              messageId,
              decodedPayload.clock,
              decodedPayload.pinned
            )
            chat.setClock(decodedPayload.clock)

            break
          }

          default: {
            break
          }
        }

        break
      }

      case ApplicationMetadataMessage.Type.TYPE_EMOJI_REACTION: {
        const decodedPayload = EmojiReaction.decode(messageToDecode)

        if (!isClockValid(BigInt(decodedPayload.clock), messageTimestamp)) {
          return
        }

        switch (decodedPayload.messageType) {
          case MessageType.COMMUNITY_CHAT: {
            if (!community.isMember(signerPublicKey)) {
              return
            }

            const messageId = decodedPayload.messageId
            const chatUuid = getChatUuid(decodedPayload.chatId)
            const chat = community.chats.get(chatUuid)

            if (!chat) {
              return
            }

            chat.handleEmojiReaction(
              messageId,
              decodedPayload,
              decodedPayload.clock,
              signerPublicKey
            )
            chat.setClock(decodedPayload.clock)

            break
          }

          default: {
            break
          }
        }

        break
      }

      default: {
        break
      }
    }
  } catch {
    // protons-runtime throws when trying to decode invalid protocol buffers
    // eslint-disable-next-line no-empty
  }

  return
}
