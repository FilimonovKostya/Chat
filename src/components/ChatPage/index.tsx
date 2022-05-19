import React from 'react'
import { AppBar, Avatar, Container, Grid, Paper, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'

const ChatPage = () => {
  return (
    <Container
      maxWidth={'md'}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Paper component={'main'} elevation={3} sx={{ flexGrow: 1, height: '100vh' }}>
        <AppBar position={'static'}>
          <Grid container p={1}>
            <Grid item display={'flex'} xs>
              <Avatar sx={{ bgcolor: pink[500], height: 56, width: 56 }}>
                <AccountCircleOutlinedIcon fontSize={'large'} />
              </Avatar>
              <Typography ml={2} variant={'body1'} display={'flex'} alignItems={'center'}>
                Kostya Filimonov
              </Typography>
            </Grid>
            <Grid item display={'flex'} alignItems={'center'}>
              <ExitToAppOutlinedIcon />
            </Grid>
          </Grid>
        </AppBar>
      </Paper>
    </Container>
  )
}

export default ChatPage
