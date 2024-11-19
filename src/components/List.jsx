import React from 'react'
import {
  FaRegWindowClose,
  FaRegCheckSquare,
  FaRegTrashAlt
} from 'react-icons/fa'

const List = () => {
  return (
    <li>
      <FaRegWindowClose />
      <FaRegCheckSquare />
      <span className='text'>Am working on new project</span>
      <FaRegTrashAlt />
    </li>
  )
}

export default List
