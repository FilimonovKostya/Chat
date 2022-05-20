import React from 'react'
import { Box } from '@mui/material'
import DialogItem from './DialogItem'

const dialogItems = [
  {
    id: 1,
    message:
      'Hi , my name Kostya. What about you ? Do you like React or maybe you prefer Vue.js ? Tell me about your suggestions',
    time: '06.05.2022 - 17:44',
  },
  {
    id: 2,
    message: 'Hello , how are you ?',
    time: '06.05.2022 - 17:44',
  },
]

const MessageBody = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'} p={2}>
      {dialogItems.map((dialog) => (
        <DialogItem key={dialog.id} message={dialog.message} time={dialog.time} />
      ))}
    </Box>
  )
}

export default MessageBody
