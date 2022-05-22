import React from 'react'
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import reactImg from './../../assets/react.webp'
import LoginIcon from '@mui/icons-material/Login'
import { purple } from '@mui/material/colors'
import { useSignIn } from '../../hooks/useSignIn'
import { useNavigate } from 'react-router-dom'

const LogIn = () => {
  const {
    inputData: { email, password },
    fetchInputData,
    onInputHandler,
    fetchingStatus,
  } = useSignIn('login')

  const navigate = useNavigate()

  if (fetchingStatus?.status === 'OK') {
    navigate('/chat')
  }

  return (
    <Grid container component='main' alignItems={'center'}>
      <Grid
        item
        xs={7}
        sx={{
          backgroundImage: `url(${reactImg})`,
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      <Grid item xs>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: purple['500'] }}>
            <LoginIcon />
          </Avatar>

          <Typography component={'h1'} variant={'h6'}>
            Log in
          </Typography>

          <Box component={'form'}>
            <TextField
              value={email}
              onChange={onInputHandler}
              color='secondary'
              margin='normal'
              id='email'
              name='email'
              label='Email'
              placeholder='Write your email address'
              variant='outlined'
              fullWidth
              required
            />

            <TextField
              value={password}
              onChange={onInputHandler}
              color='secondary'
              margin='normal'
              id='password'
              name='password'
              label='Password'
              placeholder='Write your password'
              variant='outlined'
              type='password'
              fullWidth
            />

            <Button onClick={fetchInputData} sx={{ mt: 2 }} variant='outlined' color='secondary'>
              Log in
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LogIn
