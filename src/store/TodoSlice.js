import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [
      { text: 'Working on new project', id: 1, isCompleted: false }
    ]
  },

  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    }
  }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
