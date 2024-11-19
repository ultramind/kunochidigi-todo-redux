import React from 'react'
import List from './List'

const TodoLists = () => {
  return (
    <div className='listContainer'>
      <ul>
        <List />
        <List />
        <List />
        <List />
        <List />
      </ul>
    </div>
  )
}

export default TodoLists
