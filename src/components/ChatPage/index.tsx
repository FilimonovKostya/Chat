import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Container, Paper } from '@mui/material'
import MessageControls from './MessageControls'
import { useLocation } from 'react-router-dom'

type UrlProps = {
  roomUsers: {
    messages: string[]
    name: string
    password: string
  }
}

const ChatPage = () => {
  const { state } = useLocation()
  const {
    roomUsers: { messages, password, name },
  } = state as UrlProps

  console.log('params--->', state)

  return (
    <Container maxWidth={'md'} sx={{ my: 5 }}>
      <Paper component={'main'} elevation={3} sx={{ flexGrow: 1 }}>
        <Header nameUser={name} />
        <MessageBody messages={messages} />
        <MessageControls />
      </Paper>
    </Container>
  )
}

export default ChatPage
