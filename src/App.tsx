import React from 'react';
import {Avatar, Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function App() {
    return (
        <Container maxWidth={'xs'} sx={{mt: 15}}>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Avatar sx={{background: '#9c27b0'}}> <LockOutlinedIcon/> </Avatar>

                <Box component={"form"}>
                    <Typography component={'h1'} variant={'h5'}>Sign in</Typography>
                    <TextField margin={'normal'} color={'secondary'} label="Email Address" fullWidth variant="outlined" required/>
                    <TextField margin={'normal'} color={'secondary'} label="Password" fullWidth variant="outlined" type={'password'} required/>
                    <FormControlLabel control={<Checkbox defaultChecked color="secondary"/>} label={'Remember me'}/>
                    <Button variant="contained" type={'submit'} sx={{mt: 1}} fullWidth>Sign in</Button>
                </Box>

            </Box>
        </Container>
    );
}

export default App;
