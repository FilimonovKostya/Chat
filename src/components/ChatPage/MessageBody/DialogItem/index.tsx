import React from 'react'
import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

const DialogItem = (props: { message: string; email: string; user: string }) => {
  return (
    <Box
      my={1}
      p={1}
      display={'flex'}
      flexDirection={'column'}
      alignSelf={props.user === props.email ? 'flex-end' : 'flex-start'}
      boxShadow={4}
      bgcolor={blue[100]}
      maxWidth={350}
      sx={{ wordBreak: 'break-word' }}
      borderRadius={3}
    >
      <Typography variant={'body1'} color={'#4e4242'}>
        {props.message}
      </Typography>
    </Box>
  )
}

export default DialogItem
