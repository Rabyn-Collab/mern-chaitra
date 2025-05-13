import React from 'react'
import TodoList from '../todos/TodoList'
import TodoInput from '../todos/TodoInput'

export default function HomePage() {
  return (
    <div className='p-5 space-y-5'>
      <TodoInput />
      <TodoList />

    </div>
  )
}
