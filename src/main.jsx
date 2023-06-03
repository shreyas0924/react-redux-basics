import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/user.js' // this will import all the reducers in the file
import passwordReducer from './features/password.js' // this will import all the reducers in the file
const store = configureStore({
  reducer: {
    user: userReducer,
    user1: passwordReducer,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
