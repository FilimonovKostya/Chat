import React from 'react'
import { Avatar, Typography } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Header = () => {
  return (
    <>
      <Avatar sx={{ background: '#9c27b0', mb: 1 }}>
        <LockOutlinedIcon />
      </Avatar>

      <Typography textAlign={'center'} component={'h1'} variant={'h5'}>
        Sign in
      </Typography>
    </>
  )
}

export default Header
