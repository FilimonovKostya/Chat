import React from 'react'
import { Box, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

const MessageBody = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'flex-end'} p={2}>
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
          Hi , my name Kostya. What about you ? Do you like React or maybe you prefer Vue.js ? Tell
          me about your suggestions
        </Typography>
        <Typography mt={1} alignSelf={'flex-end'} color={'#4e4242'} variant={'caption'}>
          20.05.2022 - 17:40
        </Typography>
      </Box>

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
          Hi , my name Kostya. What about you ?
        </Typography>
        <Typography mt={1}  alignSelf={'flex-end'} color={'#4e4242'} variant={'caption'}>
          20.05.2022 - 18:40
        </Typography>
      </Box>
    </Box>
  )
}

export default MessageBody
