import React, { useEffect } from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Alert, Box, Container, Paper } from '@mui/material'
import MessageControls from './MessageControls'
import { useMessage } from '../../hooks/useMessage'
import { useLocation } from 'react-router-dom'
import { io } from 'socket.io-client'
import {URL} from './../../constants'

type UrlDataType = {
  email: string
  chatRoom: string
}
const socket = io(URL)

const ChatPage = () => {
  const { state } = useLocation()
  const { email, chatRoom } = state as UrlDataType

  const { message, onMessageHandler, onSendMessage, messages, isFetching, errorMessage } =
    useMessage(email, chatRoom)
  const users = Object.keys(messages)

  console.log('tut')

  useEffect(() => {
    console.log('useEffфвфвфвect')

    socket.on("connect", () => {
      console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    });

    socket.on('my-event-a',(arg) => {
      console.log('client', arg)
    })

  },[])


  return (
    <>
      <Container maxWidth={'md'} sx={{ my: 5 }}>
        <Paper component={'main'} elevation={3} sx={{ flexGrow: 1 }}>
          <Header nameUser={email} />

          <Box
            height={500}
            sx={{ overflowX: 'hidden' }}
            display={'flex'}
            flexDirection={'column'}
            py={2}
            px={3}
          >
            {users.map((user, index) => (
              <MessageBody
                key={index}
                messages={messages ?? {}}
                isFetching={isFetching}
                email={email}
                user={user}
              />
            ))}
          </Box>

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
