import { createSlice } from '@reduxjs/toolkit'

const initailStateValue = { name: '', age: '', email: '' }

const userSlice = createSlice({
  name: 'user',
  initialState: { value: initailStateValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initailStateValue
    },
  },
})

export const { login, logout } = userSlice.actions

export default userSlice.reducer
