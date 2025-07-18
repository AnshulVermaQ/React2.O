import React from 'react'

const TodoItem = ({ todo }) => {
  const { id, todo: text, completed } = todo || {}

  return (
    <div>
      <span>{text}</span>
    </div>
  )
}

export default TodoItem
