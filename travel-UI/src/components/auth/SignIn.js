import React, { useState, useEffect,useContext } from 'react'
import {AuthContext} from '../../context/AuthContext'
import { useHttp } from '../../hooks/http.hook'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import RS from '../icons/RS'
import logo from '../icons/logo-rs.svg'
function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}
function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      {/* <Link color="inherit" href="https://material-ui.com/">
      </Link> */} {new Date().getFullYear()}.
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    width: theme.spacing(5),
    marginTop: theme.spacing(3)
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignUp () {
  const classes = useStyles()
  const auth = useContext(AuthContext)
  console.log('auth context =>', auth);
  const { loading, error, request } = useHttp()
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  })
  useEffect(() => {
    if (error) {
      snackBar(error, 'error')
    }
  }, [error])
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [color, setColor] = useState('success')
  function snackBar (msg, color) {
    setOpen(true)
    setText(msg)
    setColor(color)
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  const formHandler = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const registerhandler = async (e) => {
    e.preventDefault()
    // const URL = 'https://travel-app-back.herokuapp.com/api/auth/login'
    const URL = 'http://localhost:3333/api/auth/login'
    try {
      console.log('On a board')
      const data = await request(URL, 'POST', { ...form })
      console.log('DATA => ', data)
      auth.login(data.token, data.userId)
      if (data.message) {
        snackBar(data.message, 'success')
      }
    } catch (e) {}
  }
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <RS src={logo} className={classes.avatar} />
        {/* <LockOutlinedIcon /> */}
        <Typography component='h1' variant='h5'>
          Вход
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                onChange={formHandler}
                id='email'
                label='Почта'
                name='email'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                onChange={formHandler}
                name='password'
                label='Пароль'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='secondary'
            className={classes.submit}
            onClick={registerhandler}
            disabled={loading}
          >
            Войти
          </Button>
          <Grid container justify='flex-end'>
            <Grid item />
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color}>
          {text}
        </Alert>
      </Snackbar>
    </Container>
  )
}
