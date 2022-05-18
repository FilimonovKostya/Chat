import React from 'react'
import { Avatar, Box, Button, Grid, TextField, Typography } from '@mui/material'
import reactImg from './../../assets/react.webp'
import LoginIcon from '@mui/icons-material/Login'
import { purple } from '@mui/material/colors'

const LogIn = () => {
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
          <Avatar sx={{ bgcolor: purple['500'], mb: 1 }}>
            <LoginIcon />
          </Avatar>

          <Typography component={'h1'} variant={'h6'}>
            Log in
          </Typography>

          <Box component={'form'}>
            <TextField
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

            <Button type={'submit'} sx={{mt:2}} fullWidth variant='outlined' color='secondary'>
              Log in
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default LogIn
