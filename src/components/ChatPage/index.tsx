import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Container, Paper } from '@mui/material'
import MessageControls from './MessageControls'
import { useMessage } from '../../hooks/useMessage'

const ChatPage = () => {
  const { message, onMessageHandler, onSendMessage, messages } = useMessage('kostya', 'room1')

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
