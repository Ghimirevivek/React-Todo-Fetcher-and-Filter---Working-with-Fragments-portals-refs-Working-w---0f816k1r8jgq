import React from 'react'

export const Todo = ({ id, title, completed }) => {
  return (
    <>
      <li className="todo" id={`todo-${id}`}>
        <div className="todo-text">{title}</div>
        <div className="todo-status">
          {completed ? 'Complete' : 'Incomplete'}
        </div>
      </li>
    </>
  )
}
