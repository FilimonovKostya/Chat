import React from 'react'
import { Box } from '@mui/material'
import DialogItem from './DialogItem'
import Circular from '../../Circular'

const MessageBody = (props: {
  messages: any
  isFetching: boolean
  email: string
  users: string
}) => {

  console.log('users',props.users)
  console.log('messages',props.messages)
  return (
    <Box
      position={'relative'}
      display={'flex'}
      sx={{ overflowX: 'hidden' }}
      flexDirection={'column'}
      // height={500}
      alignItems={'flex-end'}
      p={2}
    >
      {props.isFetching && <Circular />}

      {props.messages[props.email] &&
        props.messages[props.users].messages.map((message: any, index: any) => (
          <DialogItem key={index} message={message} email={props.email} user={props.users} />
        ))}


    </Box>
  )
}

export default MessageBody
