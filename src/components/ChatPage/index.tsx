import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Alert, Container, Paper } from '@mui/material'
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

  const { message, onMessageHandler, onSendMessage, messages, isFetching, errorMessage } =
    useMessage(email, chatRoom)

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
      {errorMessage && (
        <Alert
          sx={{
            position: 'absolute',
            bottom: 50,
            maxWidth: '250px',
            width: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          variant='filled'
          severity='error'
        >
          {errorMessage}
        </Alert>
      )}
    </>
  )
}

export default ChatPage
