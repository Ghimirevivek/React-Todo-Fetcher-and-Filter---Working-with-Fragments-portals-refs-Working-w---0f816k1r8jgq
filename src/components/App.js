import React, { useState, useEffect } from 'react'
import '../styles/App.css'
import { Loader } from './Loader'
import { Todo } from './Todo'
const App = () => {
  const [todos, setTodos] = useState([])
  const [loader, setLoader] = useState(true)
  const [completed, setCompleted] = useState(true)
  const [incomplete, setIncomplete] = useState(true)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.slice(0, 20))
        setLoader(false)
      })
      .catch((err) => console.log('error'))
  }, [])
  const handleCompleteChange = (e) => {
    setCompleted(e.target.checked)
  }
  const handleInompleteChange = (e) => {
    setIncomplete(e.target.checked)
  }
  const filteredTodos = todos.filter((todo) => {
    if (completed && incomplete) {
      return true
    } else if (completed && todo.completed) {
      return true
    } else if (incomplete && !todo.completed) {
      return true
    } else {
      return false
    }
  })
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <ol>
            {filteredTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                completed={todo.completed}
              />
            ))}
          </ol>
          <div id="filter-holder">
            <label>
              <input
                type="checkbox"
                id="completed-checkbox"
                checked={completed}
                onChange={handleCompleteChange}
              />
              Show Completed
            </label>
            <label>
              <input
                type="checkbox"
                id="incompleted-checkbox"
                checked={incomplete}
                onChange={handleInompleteChange}
              />
              Show Inompleted
            </label>
          </div>
        </>
      )}
    </>
  )
}

export default App
