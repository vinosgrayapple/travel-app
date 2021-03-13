import React from 'react'
import ReactDOM from 'react-dom'
import './styles/body.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Main from './pages/Main'
import App from './App'
// import SignIn from './components/auth/SignIn'
// import SignUp from './components/auth/SignUp'
// import SignIn from './components/auth/SignIn'

ReactDOM.render(
  <React.StrictMode>
    {/*  <Main /> */}
    {/* <SignUp /> */}
    <App />
  </React.StrictMode>
,
  document.getElementById('root')
)
