import React from 'react'
import { Box } from '@mui/material'
import DialogItem from './DialogItem'

const MessageBody = (props: { messages: string[] }) => {
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
