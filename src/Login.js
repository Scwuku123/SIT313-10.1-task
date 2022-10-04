import * as React from 'react';
import { useRef, useState } from 'react';


import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import {Col,Divider,Row} from 'antd';
import { useAuth } from './AuthContext'



const theme = createTheme({

    palette:{
        background:{
            default:'#99ccFF'
        },
        primary: {
            main: '#2B37D4',//indigo
          },
          secondary: {
            main: '#E769A6',//pink
          },
          error: {
            main: '#D72A2A',//red
          },
          warning: {
            main: '#FC7B09',//orange
          },
          info: {
            main: '#6B7D6A',//gray
          },
          success: {
            main: '#09FE00',//green
          },
          text: {
            primary: '#000000'
          },
       
    }
}

);



export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const { signup, currentUser } = useAuth()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)



    async function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.currentTarget);
        if(data.get('email') == ""){
            return setError('Sorry,the email can‘t be empty')
        }

        if(data.get('password') == ""){
            return setError('Sorry,the password can’t be empty')
        }

        try {
            setError("")
            setLoading(true)
            await login(data.get('email'), data.get('password'))
            const w = window.open('about:blank');
            w.location.href = "/"
        } catch {
            setError("Sorry, login fail！")
        }
        setLoading(false)
    }




return (
  

  
        <ThemeProvider theme={theme}>
            <Container 
            sx={{
                component:"main",
                maxWidth:"xs",
            }}
           >

                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
        
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <Typography component="h1" variant="h5">
                        {error}
                    </Typography>
                  
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={4}>


                            <Grid item xs={14}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    name="email"
                                    ref={emailRef}
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={14}>
                                <TextField
                                    required
                                    fullWidth
                                    id="password"
                                    label="password"
                                    name="password"
                                    ref={passwordRef}
                                    type="password"
                                    autoComplete="password"
                                />
                            </Grid>


                        </Grid>
                        <Button
                            type="submit"
                            disabled={loading}
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Button href="/Register" variant="outlined" sx={{ my:1.5, mx: 2 }}>
                            Register
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}