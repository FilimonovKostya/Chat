import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Container, Paper } from '@mui/material'
import MessageControls from './MessageControls'
import { useMessage } from '../../hooks/useMessage'
import { useLocation } from 'react-router-dom'

type UrlDataType = {
  email: string
  chatRoom: string
}

const ChatPage = () => {
  const { state } = useLocation()
  const { email, chatRoom } = state as UrlDataType

  const { message, onMessageHandler, onSendMessage, messages, isFetching } = useMessage(
    email,
    chatRoom
  )

  return (
    <>
      <Container maxWidth={'md'} sx={{ my: 5 }}>
        <Paper component={'main'} elevation={3} sx={{ flexGrow: 1 }}>
          <Header nameUser={email} />
          <MessageBody messages={messages} isFetching={isFetching} />
          <MessageControls
            message={message}
            onMessageHandler={onMessageHandler}
            onSendMessage={onSendMessage}
          />
        </Paper>
      </Container>
    </>
  )
}

export default ChatPage
