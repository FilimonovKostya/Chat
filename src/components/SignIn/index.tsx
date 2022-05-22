import React from 'react'
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import { useSignIn } from '../../hooks/useSignIn'

const SignIn = () => {
  const {
    inputData: { email, password },
    onInputHandler,
    fetchInputData
  } = useSignIn('registration')

  return (
    <Container maxWidth={'xs'} sx={{ mt: 15 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Header />

        <Box component={'form'}>
          <TextField
            value={email}
            onChange={onInputHandler}
            name={'email'}
            margin={'normal'}
            color={'secondary'}
            label='Email Address'
            fullWidth
            variant='outlined'
            required
          />

          <TextField
            value={password}
            onChange={onInputHandler}
            name={'password'}
            margin={'normal'}
            color={'secondary'}
            label='Password'
            fullWidth
            variant='outlined'
            // type={'password'}
            required
          />

          <FormControlLabel
            control={<Checkbox defaultChecked color='secondary' />}
            label={'Remember me'}
          />

          <Button variant='contained' onClick={fetchInputData} sx={{ mt: 1 }} fullWidth>
            Sign in
          </Button>

          <Grid container marginTop={2} marginBottom={8}>
            <Grid item xs>
              <Link variant={'body2'} href={'#'}>
                Forgot password ?
              </Link>
            </Grid>

            <Grid item>
              <Link variant={'body2'} href={'#'}>
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>

          <Footer />
        </Box>
      </Box>
    </Container>
  )
}

export default SignIn
