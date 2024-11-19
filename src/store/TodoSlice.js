import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || [
      { text: 'Working on new project', id: 1, isCompleted: false }
    ]
  },

  reducers: {
    // add todo action
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },

    // remove todo action
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
