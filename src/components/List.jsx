import React from 'react'
import {
  FaRegWindowClose,
  FaRegCheckSquare,
  FaRegTrashAlt
} from 'react-icons/fa'

const List = ({ todo }) => {
  const { text, id, isCompleted } = todo

  // deleteTodo
  const deleteTodo = id => {
    console.log(id)
  }
  return (
    <li>
      {isCompleted ? <FaRegCheckSquare /> : <FaRegWindowClose />}

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
