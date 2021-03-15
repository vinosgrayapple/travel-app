import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import rsLogo from './img/rs_school_js.svg';
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}))
function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://rs.school/react/'>
      <img src={rsLogo} alt="log" width="70" style={{padding: "0 10px 0 10px"}}/>
      </Link>{' '}
      {new Date().getFullYear()}
      .
    </Typography>
  )
}

function Footer() {
  const classes = useStyles()
  return (
     <>
      <footer className={classes.footer}>
    <Copyright /> 
  </footer>
  </>
  )
}

export default Footer
