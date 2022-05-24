import React from 'react'
import { AppBar, Avatar, Grid, Typography } from '@mui/material'
import { pink } from '@mui/material/colors'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'

const Header = (props: { nameUser: string }) => {
  return (
    <>
      <AppBar position={'sticky'}>
        <Grid container p={1}>
          <Grid item display={'flex'} xs>
            <Avatar sx={{ bgcolor: pink[500], height: 56, width: 56 }}>
              <AccountCircleOutlinedIcon fontSize={'large'} />
            </Avatar>
            <Typography ml={2} variant={'body1'} display={'flex'} alignItems={'center'}>
              {props.nameUser}
            </Typography>
          </Grid>
          <Grid item display={'flex'} alignItems={'center'}>
            <ExitToAppOutlinedIcon />
          </Grid>
        </Grid>
      </AppBar>
    </>
  )
}

export default Header
