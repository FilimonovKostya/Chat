import React from 'react'
import { Box, LinearProgress } from '@mui/material'

const ProgressBar = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress color={'secondary'} />
    </Box>
  )
}

export default ProgressBar
