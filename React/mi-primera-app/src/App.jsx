import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/Saludo'

function App() {
  // debugger

  const [nombre, setNombre] = useState('Belgrano')

  console.log(setNombre)  
  function cambiarNombre(){
    const nuevo_nombre = prompt('Ingrese un nuevo nombre')
    setNombre(nuevo_nombre)
  }


  return (
    <>
      <div>
        <Saludo nombre={nombre} active={true} />
        <h1>Clase React NT2</h1>
        <button onClick={cambiarNombre}> Cambiar nombre </button>

        <Saludo nombre={'Alejandro'} active={true} />
        <Saludo nombre={'Vegeta'}/>
        <Saludo />
        <Saludo />
      </div>
    </>
  )
}

export default App
