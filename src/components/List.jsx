import React from 'react'
import {
  FaRegWindowClose,
  FaRegCheckSquare,
  FaRegTrashAlt
} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleCompleted } from '../store/TodoSlice'

const List = ({ todo }) => {
  const dispatch = useDispatch()
  const { text, id, isCompleted } = todo

  // deleteTodo
  const deleteTodo = id => {
    dispatch(removeTodo(id))
  }

  const toggleTodo = id => {
    dispatch(toggleCompleted(id))
  }

  return (
    <li>
      {isCompleted ? (
        <FaRegCheckSquare onClick={() => toggleTodo(id)} />
      ) : (
        <FaRegWindowClose onClick={() => toggleTodo(id)} />
      )}

      <span
        className='text'
        style={{ textDecoration: isCompleted && 'line-through' }}
      >
        {text}
      </span>
      <FaRegTrashAlt onClick={() => deleteTodo(id)} />
    </li>
  )
}

export default List
