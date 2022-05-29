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
  const users = Object.keys(messages)

  return (
    <>
      <Container maxWidth={'md'} sx={{ my: 5 }}>
        <Paper component={'main'} elevation={3} sx={{ flexGrow: 1 }}>
          <Header nameUser={email} />
          {/*<MessageBody*/}
          {/*  messages={messages ? messages : []}*/}
          {/*  isFetching={isFetching}*/}
          {/*  email={email}*/}
          {/*  users={users}*/}
          {/*/>*/}

          {users.map((user,index) => (
            <MessageBody
              key={index}
              messages={messages ? messages : []}
              isFetching={isFetching}
              email={email}
              users={user}
            />
          ))}

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
