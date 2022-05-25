import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Container, Paper } from '@mui/material'
import MessageControls from './MessageControls'
import { useMessage } from '../../hooks/useMessage'

type UrlProps = {
  roomUsers: {
    messages: string[]
    name: string
    password: string
  }
}

const ChatPage = () => {
  // const { state } = useLocation()
  // const {
  //   roomUsers: { name },
  // } = state as UrlProps

  const { message, onMessageHandler, onSendMessage, messages } = useMessage('kostya')

  return (
    <Container maxWidth={'md'} sx={{ my: 5 }}>
      <Paper component={'main'} elevation={3} sx={{ flexGrow: 1 }}>
        <Header nameUser={'kostya'} />
        <MessageBody messages={messages} />
        <MessageControls
          message={message}
          onMessageHandler={onMessageHandler}
          onSendMessage={onSendMessage}
        />
      </Paper>
    </Container>
  )
}

export default ChatPage
