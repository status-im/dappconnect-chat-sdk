import React from 'react'

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useMatch,
} from 'react-router-dom'

import { MainSidebar } from '../components/main-sidebar'
import { AppProvider } from '../contexts/app-context'
import { DialogProvider } from '../contexts/dialog-context'
import { useTheme } from '../hooks/use-theme'
import { ProtocolProvider, useProtocol } from '../protocol'
import { Chat } from '../routes/chat'
import { styled } from '../styles/config'
import { GlobalStyle } from '../styles/GlobalStyle'

// import { Flex } from '../system'
// import { Navbar } from './chat/components/navbar'
import type { Config } from '../types/config'

interface Props extends Config {
  meta?: string
}

// TODO: use a better way to handle this
const Gate = (props: { children: JSX.Element }) => {
  const { client } = useProtocol()

  const { params } = useMatch(':id')!
  const chatId = params.id!

  const chat = client.community.getChat(chatId)

  if (!chat) {
    return (
      <Navigate to={`/${client.community._chats[0].uuid ?? '/'}`} replace />
    )
  }

  return props.children
}

export const Community = (props: Props) => {
  const {
    theme,
    router: Router = BrowserRouter,
    publicKey,
    environment,
    options,
  } = props

  useTheme(theme)

  return (
    <Router>
      <ProtocolProvider options={{ publicKey, environment }}>
        <AppProvider options={options}>
          <DialogProvider>
            <GlobalStyle />
            <Wrapper>
              <MainSidebar />
              {/* <Flex direction="column" style={{ flexGrow: 1 }}>
                // todo?: move navbar here, think community w/o chats yet, but already has members to inspect
                <Navbar /> */}
              <Routes>
                <Route
                  path="/:id"
                  element={
                    <Gate>
                      <Chat />
                    </Gate>
                  }
                />
              </Routes>
              {/* </Flex> */}
            </Wrapper>
          </DialogProvider>
        </AppProvider>
      </ProtocolProvider>
    </Router>
  )
}

export type { Props as CommunityProps }

const Wrapper = styled('div', {
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'stretch',
  background: '$background',
})
