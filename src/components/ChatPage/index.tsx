import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Container, Paper } from '@mui/material'
import MessageControls from './MessageControls'
import { useLocation, useMatch, useParams } from 'react-router-dom'

const ChatPage = () => {

  const params  = useParams()
  const test = useLocation()

  console.log('params--->', params)
  console.log('params--->', test)

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
