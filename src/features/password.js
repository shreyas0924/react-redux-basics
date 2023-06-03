import { createSlice } from '@reduxjs/toolkit'

const initailPassword = { password: '' }
const passwordSlice = createSlice({
  name: 'user1',
  initialState: { value: initailPassword },
  reducers: {
    setPassword: (state, action) => {
      state.value = action.payload
    },
    reset: (state) => {
      state.value = initailPassword
    },
  },
})
export const { setPassword, reset } = passwordSlice.actions
export default passwordSlice.reducer
