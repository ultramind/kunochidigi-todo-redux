import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/TodoSlice'

const AddInput = () => {
  const dispatch = useDispatch()
  const [todo, setTodo] = useState('')
  const [error, setError] = useState('')

  // adding the todo
  const handleSubmit = e => {
    e.preventDefault()
    // validating the todo if empty
    if (todo == '') {
      setError('Empty list not required')
      return
    }
    const newTodo = {
      id: Math.random(),
      text: todo,
      isCompleted: false
    }

    // dispatch action
    dispatch(addTodo(newTodo))
    setTodo('')
    setError('')
  }

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter todo item...'
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button>
          <span>Add</span>
        </button>
      </form>
      <small>{error}</small>
    </div>
  )
}

export default AddInput
