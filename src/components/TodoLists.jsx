import React from 'react'
import List from './List'
import { useSelector } from 'react-redux'

const TodoLists = () => {
  const { todos } = useSelector(state => state.todo)
  console.log(todos)
  return (
    <div className='listContainer'>
      <ul>
        {todos?.map(todo => (
          <List key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoLists
