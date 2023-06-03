// import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'
import { setPassword, reset } from '../features/password'

function Login() {
  const dispatch = useDispatch()
  function handleLogin() {
    dispatch(
      login({
        name: 'Shreyas',
        age: '20',
        email: 'shreyasp0924@gmail.com',
      })
    )
    dispatch(setPassword({ password: 'hello world' }))
  }

  function handleLogout() {
    dispatch(logout())
    dispatch(reset())
  }
  return (
    <div>
      <button onClick={() => handleLogin()}>Login</button>
      <br></br>
      <br></br>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  )
}

export default Login
