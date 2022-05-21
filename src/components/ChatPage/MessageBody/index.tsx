import React from 'react'
import { Box } from '@mui/material'
import DialogItem from './DialogItem'
import { dialogItems } from '../../../mockData'

const MessageBody = () => {
  return (
    <Box
      display={'flex'}
      sx={{ overflowX: 'hidden' }}
      flexDirection={'column'}
      height={500}
      alignItems={'flex-end'}
      p={2}
    >
      {dialogItems.map((dialog) => (
        <DialogItem key={dialog.id} message={dialog.message} time={dialog.time} />
      ))}
    </Box>
  )
}

export default MessageBody
