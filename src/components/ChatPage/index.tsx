import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Container, Paper } from '@mui/material'
import MessageControls from './MessageControls'

const ChatPage = () => {
  return (
    <Container maxWidth={'md'} sx={{ my: 5 }}>
      <Paper component={'main'} elevation={3} sx={{ flexGrow: 1 }}>
        <Header />
        <MessageBody />
        <MessageControls />
      </Paper>
    </Container>
  )
}

export default ChatPage
