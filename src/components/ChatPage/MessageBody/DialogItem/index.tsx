import React from 'react'
import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

type DialogItemProps = {
  message: string
  time: string
}

const DialogItem = ({ message, time }: DialogItemProps) => {
  return (
    <Box
      my={1}
      p={1}
      display={'flex'}
      flexDirection={'column'}
      boxShadow={4}
      bgcolor={blue[100]}
      maxWidth={350}
      width={'100%'}
      borderRadius={3}
    >
      <Typography variant={'body1'} color={'#4e4242'}>
        {message}
      </Typography>
      <Typography mt={1} alignSelf={'flex-end'} color={'#4e4242'} variant={'caption'}>
        {time}
      </Typography>
    </Box>
  )
}

export default DialogItem
