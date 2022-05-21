import React from 'react'
import Header from './Header'
import MessageBody from './MessageBody'
import { Box, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

const ChatPage = () => {
  return (
    <Container maxWidth={'md'} sx={{ my: 5 }}>
      <Paper component={'main'} elevation={3} sx={{ flexGrow: 1 }}>
        <Header />
        <MessageBody />
        <Grid container borderTop={1} borderColor={blue[100]}>
          <Grid item xs>
            <TextField
              sx={{
                fieldset: {
                  borderStyle: 'none',
                },
              }}
              fullWidth
              name={'message'}
              id={'message'}
              placeholder={'Type a message'}
            />
          </Grid>

          <Grid item>
            <Box
              component={'button'}
              sx={{
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
                borderStyle: 'none',
                borderBottomRightRadius: 4,
              }}
              p={2}
              bgcolor={'#f50057'}
              color={'white'}
              display={'flex'}
              alignItems={'center'}
              height={'100%'}
            >
              <Typography variant={'button'}>Send message</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default ChatPage
