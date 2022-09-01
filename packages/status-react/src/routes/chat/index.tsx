import React, { useEffect, useRef } from 'react'

import { useLocation, useMatch } from 'react-router-dom'

import { MemberSidebar } from '../../components/member-sidebar'
import { useAppState } from '../../contexts/app-context'
import { ChatProvider, useChatContext } from '../../contexts/chat-context'
import { useAccount, useChat, useMessages, useProtocol } from '../../protocol'
import { styled } from '../../styles/config'
import { Avatar, Flex, Heading, Text } from '../../system'
import { ChatInput } from './components/chat-input'
import { ChatMessage } from './components/chat-message'
import { Navbar } from './components/navbar'

interface ChatStartProps {
  chatId: string
}

const ChatStart = (props: ChatStartProps) => {
  const { chatId } = props

  const { identity } = useChat(chatId)

  return (
    <Flex direction="column" gap="3" align="center" css={{ marginBottom: 50 }}>
      <Avatar
        size={120}
        name={identity?.displayName}
        color={identity?.color}
        initialsCount={1}
      />
      <Heading>{identity?.displayName}</Heading>
      <Text>
        Welcome to the beginning of the #{identity?.displayName} channel!
      </Text>
    </Flex>
  )
}

const Body = () => {
  const { client } = useProtocol()
  const { state } = useChatContext()
  const { account } = useAccount()

  const { params } = useMatch(':id')! // eslint-disable-line @typescript-eslint/no-non-null-assertion
  const chatId = params.id!

  const chat = client.community.getChat(chatId)!
  const messages = useMessages(chatId)

  const location = useLocation()
  const selectedMesssageId = location.state?.selectedMesssageId
  // delete location.state?.selectedMesssageId

  const contentRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    contentRef.current!.scrollTop = contentRef.current!.scrollHeight ?? 0
  }, [chatId, messages.data.length])

  const handleMessageSubmit = (message: string) => {
    chat.sendTextMessage(message, state.reply?.message.messageId)
  }

  return (
    <>
      <ContentWrapper ref={contentRef}>
        <ChatStart chatId={chatId} />
        {messages.data.map(message => {
          const selected = message.messageId === selectedMesssageId
          // delete location.state?.selectedMesssageId
          // if (location.state?.selectedMesssageId) {
          //   location.state.selectedMesssageId = undefined
          // }
          // if (window.history?.state?.usr?.selectedMesssageId) {
          //   delete window.history?.state?.usr?.selectedMesssageId
          // }
          window.history.replaceState({}, document.title)

          return (
            <ChatMessage
              key={message.messageId}
              message={message}
              selected={selected}
            />
          )
        })}
      </ContentWrapper>
      {account && <ChatInput onSubmit={handleMessageSubmit} />}
    </>
  )
}

export const Chat = () => {
  const { state, options } = useAppState()

  const enableMembers = options.enableMembers ?? false // && (chat.type === 'group' || chat.type === 'channel')
  const showMembers = enableMembers && state.showMembers

  return (
    <ChatProvider>
      <Wrapper>
        <Main>
          <Navbar enableMembers={enableMembers} />
          <Body />
        </Main>
        {showMembers && <MemberSidebar />}
      </Wrapper>
    </ChatProvider>
  )
}

const Wrapper = styled('div', {
  flex: 1,
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'stretch',
  background: '$background',
  maxWidth: '100%',
  minWidth: 1,
})

const ContentWrapper = styled('div', {
  flex: 1,
  overflowY: 'auto',
  overflowX: 'hidden',
  WebkitOverflowScrolling: 'touch',
  overscrollBehavior: 'contain',
  minWidth: 1,

  // scrollSnapType: 'y proximity',

  // '& > div:last-child': {
  // scrollSnapAlign: 'end',
  // scrollMarginBlockEnd: '1px',
  // },
})

const Main = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  minWidth: 1,
})
