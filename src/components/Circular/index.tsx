import React from 'react'
import { CircularProgress } from '@mui/material'

const Circular = () => {
  return (
    <CircularProgress
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
      }}
      color='secondary'
    />
  )
}

export default Circular
