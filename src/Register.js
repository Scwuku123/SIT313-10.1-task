import * as React from 'react';
import { useRef, useState } from 'react';
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
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)




    async function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.currentTarget);


        if (data.get('password') !== data.get('passwordAgain')) {
            return setError('Sorry,passwords not match, please check')
        }
        
        if(data.get('email') == ""){
            return setError('Sorry,the email cannot be empty')
        }

        try {
            setError('')
            setLoading(true)
            await signup(data.get('email'), data.get('password'))
            setError('register success , please  login!')
        } catch {
            setError(' create account fail')
        }
        setLoading(false)

    }
    




    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
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
                        Register
                    </Typography>
                    <Typography component="h1" variant="h5">
                        {error}
                    </Typography>

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={4}>
                            <Grid item xs={15}>
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
                            <Grid item xs={15}>
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
                            <Grid item xs={15}>
                                <TextField
                                    required
                                    fullWidth
                                    id="passwordAgain"
                                    label="Confirmpassword"
                                    name="passwordAgain"
                                    ref={passwordConfirmRef}
                                    type="password"
                                    autoComplete="passwordAgain"
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
                            Submit
                        </Button>
                        <Button href="/Login" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                            Login 
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}