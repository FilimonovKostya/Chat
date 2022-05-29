import React from 'react'
import { Box } from '@mui/material'
import DialogItem from './DialogItem'
import Circular from '../../Circular'

const MessageBody = (props: { messages: string[]; isFetching: boolean }) => {
  return (
    <Box
      position={'relative'}
      display={'flex'}
      sx={{ overflowX: 'hidden' }}
      flexDirection={'column'}
      height={500}
      alignItems={'flex-end'}
      p={2}
    >
      {props.isFetching && <Circular />}
      {props.messages.map((message, index) => (
        <DialogItem key={index} message={message} />
      ))}
    </Box>
  )
}

export default MessageBody
