import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: JSON.parse(localStorage.getItem('todos')) || []
  },

  reducers: {
    // add todo action
    addTodo: (state, action) => {
      state.todos.push(action.payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },

    // remove todo action
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      localStorage.setItem('todos', JSON.stringify(state.todos))
    },
    // toggle todo action
    toggleCompleted: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
      localStorage.setItem('todos', JSON.stringify(state.todos))
    }
  }
})

export const { addTodo, removeTodo, toggleCompleted } = todoSlice.actions

export default todoSlice.reducer
