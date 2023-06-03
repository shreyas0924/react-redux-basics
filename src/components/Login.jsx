// import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'
const Login = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: 'Shreyas',
              age: '20',
              email: 'shreyasp0924@gmail.com',
            })
          )
        }
      >
        Login
      </button>
      <br></br>
      <br></br>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  )
}

export default Login
