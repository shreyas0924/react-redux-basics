import { createSlice } from '@reduxjs/toolkit'

const initailPassword = { password: '' }
const userSlice2 = createSlice({
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
export const { setPassword, reset } = userSlice2.actions
export default userSlice2.reducer
