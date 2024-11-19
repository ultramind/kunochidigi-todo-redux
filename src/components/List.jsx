import React from 'react'
import {
  FaRegWindowClose,
  FaRegCheckSquare,
  FaRegTrashAlt
} from 'react-icons/fa'

const List = ({ todo }) => {
  const { text, id, isCompleted } = todo
  return (
    <li>
      {isCompleted ? <FaRegCheckSquare /> : <FaRegWindowClose />}

      <span
        className='text'
        style={{ textDecoration: isCompleted && 'line-through' }}
      >
        Am working on new project
      </span>
      <FaRegTrashAlt />
    </li>
  )
}

export default List
