import React, { ChangeEvent } from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

type MessageControlsProps = {
  message: string
  onMessageHandler: (e: ChangeEvent<HTMLInputElement>) => void
  onSendMessage: (event: ChangeEvent<HTMLDivElement>) => void
}

const MessageControls = ({ message, onMessageHandler, onSendMessage }: MessageControlsProps) => {
  return (
    <Box
      component={'form'}
      onKeyPress={(event) => event.key === 'Enter' && onSendMessage}
      onSubmit={onSendMessage}
    >
      <Grid container>
        <Grid item xs>
          <TextField
            sx={{
              borderTop: 1,
              borderColor: blue[100],
              fieldset: {
                borderStyle: 'none',
              },
            }}
            fullWidth
            value={message}
            onChange={onMessageHandler}
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
    </Box>
  )
}

export default MessageControls
