import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Container, Paper } from '@mui/material'

const ChatPage = () => {
  return (
    <Container
      maxWidth={'md'}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Paper component={'main'} elevation={3} sx={{ flexGrow: 1, minHeight: '100vh'}}>
        <Header />
        <MessageBody />
      </Paper>
    </Container>
  )
}

export default ChatPage
