import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [
      { text: 'Working on new project', id: 1, isCompleted: false }
    ]
  },

  reducers: {}
})

export const {} = todoSlice.actions

export default todoSlice.reducer
