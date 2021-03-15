import React, { useState, useEffect,useContext } from 'react'
import {useHistory } from 'react-router-dom'
import { useHttp } from '../../hooks/http.hook'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import RS from '../icons/RS'
import {AuthContext} from '../../context/AuthContext'
// import logo from '../icons/logo-rs.svg'
function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
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
const history = useHistory()
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
    
    setOpen(false)
  }

  const formHandler = e => setForm({ ...form, [e.target.name]: e.target.value })
  const registerhandler = async (e) => {
    e.preventDefault()
    // const URL = 'https://travel-app-back.herokuapp.com/api/auth/register'
    const URL = 'https://travel-app-back.herokuapp.com/api/auth/register'
    try {
      console.log('On a board')
      const data = await request(URL, 'POST', { ...form })
      console.log('data =>', data);
      if (data._id) {
          const URL = 'https://travel-app-back.herokuapp.com/api/auth/login'
        console.log(form);
          const data = await request(URL, 'POST', { ...form })
          const {token, userId} = data
        // // @ts-ignore
          auth.login(token, userId)
        history.push("/") 
      }
    } catch (e) {

    }
  }
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <RS />
        {/* <LockOutlinedIcon /> */}
        <Typography component='h1' variant='h5'>
          Регистрация
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                onChange={formHandler}
                id='firstName'
                label='Имя'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                onChange={formHandler}
                id='lastName'
                label='Фамлия'
                name='lastName'
                autoComplete='lname'
              />
            </Grid>
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
            color='primary'
            className={classes.submit}
            onClick={registerhandler}
            disabled={loading}
          >
            Зарегестрировать
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              {/* <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
      
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color}>
          {text}
        </Alert>
      </Snackbar>
    </Container>
  )
}
