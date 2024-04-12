import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <div className="flow-right controls">
          <span>Item count: <span id="item-count">0</span></span>
          <span>Unchecked count: <span id="unchecked-count">0</span></span>
        </div>
        <button className="button center" onClick="addTodo()">Agregar Tarea</button>
        <ul id="todo-list" className="todo-list">
          <li className="todo-container">
            <input type="checkbox" className="todo-checkbox"/>
            <span className="todo-item">Tarea 1</span>
            <button className="button todo-delete" onClick="deleteTodo()">Eliminar</button>
          </li>
          <li className="todo-container">
            <input type="checkbox" className="todo-checkbox"/>
            <span className="todo-item">Tarea 1</span>
            <button className="button todo-delete" onClick="deleteTodo()">Eliminar</button>
          </li>
          <li className="todo-container">
            <input type="checkbox" className="todo-checkbox"/>
            <span className="todo-item">Tarea 1</span>
            <button className="button todo-delete" onClick="deleteTodo()">Eliminar</button>
          </li>
          <li className="todo-container">
            <input type="checkbox" className="todo-checkbox"/>
            <span className="todo-item">Tarea 1</span>
            <button className="button todo-delete" onClick="deleteTodo()">Eliminar</button>
          </li>
        </ul>
      </div>
    </>
  )
}

export default App
