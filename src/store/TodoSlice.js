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
    },
    // toggle todo action
    toggleCompleted: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    }
  }
})

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer
