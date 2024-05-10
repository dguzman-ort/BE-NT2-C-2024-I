import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Counters from './components/Counters'
import Button from './components/Button'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = () => {
    const titulo = prompt('Ingrese el titulo de la tarea')
    //console.log("Se agrego la tarea: ", titulo)

    const newTodo = {
      id: new Date().getTime(),
      title: titulo,
      completed: false
    }

    console.log(newTodo)

    setTodos([...todos, newTodo])
    
    // setTodos((prev) => {
    //   console.log(prev)
    //   return [...prev, newTodo]
    // })
  }

  const updateTodoById = (id) => {
    console.log("Actualizar tarea", id)
    
    const newTodos = todos.map(item => {
      return item.id === id ? {...item, completed: !item.completed} : item
    })

    setTodos(newTodos)
  }

  const removeTodoById = (id) => {
    console.log("Borrar esa tarea", id)
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      <div className="container center">
        <h1 className="center title">TODO App</h1>
        <Counters tareas={todos} />  

        <Button 
          className="button center" 
          text="Add TODO" 
          callback={addTodo} 
        />
        <ul id="todo-list" className="todo-list">
          
          {
            todos.map(item  => <Todo tarea={item} key={item.id} onClickRemove={removeTodoById} onToggle={updateTodoById} />)
          }
        </ul>
      </div>
    </>
  )
}

export default App
