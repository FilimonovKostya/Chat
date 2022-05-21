import React from 'react'
import { Box, Grid, TextField, Typography } from '@mui/material'
import { blue } from '@mui/material/colors'

const MessageControls = () => {
  return (
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
  )
}

export default MessageControls