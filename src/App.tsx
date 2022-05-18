import React from 'react';
import {Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material";
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

                    <Grid container marginTop={2} marginBottom={8}>
                        <Grid item xs>
                            <Link variant={'body2'} href={'#'}>Forgot password ?</Link>
                        </Grid>
                        <Grid item>
                            <Link variant={'body2'} href={'#'}>Don't have an account? Sign Up</Link>
                        </Grid>
                    </Grid>

                    <Box textAlign={'center'} color={'text.secondary'}>
                        <Typography variant={'body2'}> Copyright information :)</Typography>
                    </Box>

                </Box>

            </Box>
        </Container>
    );
}

export default App;
