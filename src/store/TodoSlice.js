import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todo: JSON.parse(localStorage.getItem('todos')) || []
  },

  reducers: {}
})

export const {} = todoSlice.actions

export default todoSlice
