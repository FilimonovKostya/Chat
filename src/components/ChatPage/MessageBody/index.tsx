import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import DialogItem from './DialogItem'
import axios from 'axios'
import { URL } from '../../../constants'

const MessageBody = (props: { messages: string[] }) => {
  useEffect(() => {
    axios
      .get(`${URL}/messages?chatRoom=room1&user=kostya`)
      .then((res) => console.log('response', res.data))
      .catch((error) => console.log('errrorrrrrrrr', error))
  }, [])

  return (
    <Box
      display={'flex'}
      sx={{ overflowX: 'hidden' }}
      flexDirection={'column'}
      height={500}
      alignItems={'flex-end'}
      p={2}
    >
      {props.messages.map((message, index) => (
        <DialogItem key={index} message={message} time={'12-15-30'} />
      ))}
    </Box>
  )
}

export default MessageBody
