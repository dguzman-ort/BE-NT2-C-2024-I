import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cronometro from './components/Cronometro'

// function App() {
//   // const [count, setCount] = useState(0)
//   const [nombre, setNombre] = useState('Clase NT2')
//   const [edad, setEdad] = useState(33)

//   // useEffect(() => {
//   //   console.log('Hola, estoy en el ciclo de vida MOUNT: apenas se inyecta este componente en la vista muestro este mensaje')
//   //   // Buscar el listado de datos en una API

//   //   return () => {
//   //     console.log('Hola, estoy en el ciclo de vida UNMOUNT: apenas se remueva este componente de la vista muestro este mensaje')
//   //   }

//   // }, [])

//   // useEffect(() => {
//   //   console.log('Hola, estoy en el ciclo de vida UPDATE: apenas se actualiza el estado de nombre muestro este mensaje')
//   //   console.log(nombre)
//   // }, [nombre])

//   // useEffect(() => {
//   //   //console.log('Hola, estoy en el ciclo de vida UPDATE: apenas se actualiza el estado de edad muestro este mensaje')
//   //   console.log(edad)
//   // }, [edad])

//   // useEffect(() => {
//   //   console.log('Hola, estoy en el ciclo de vida UPDATE: apenas se actualiza el estado de nombre y edad muestro este mensaje')
//   //   console.log(nombre, edad)
//   // }, [nombre, edad])




//   return (
//     <>
//       <h1>Hola {nombre}, tenes {edad} anios</h1>
//       <div className="card">
//         <button onClick={() => {
//           setNombre(prompt("Cual es tu nombre?"))
//         }}>
//           Cambiar nombre
//         </button>
//         <button onClick={() => {
//           setEdad(prompt("Cual es tu edad?"))
//         }}>
//           Cambiar edad
//         </button>

//       </div>

//     </>
//   )
// }



function App() {

  const [estaIniciado, setEstaIniciado] = useState(false)

  return (
    <>
      <Cronometro estaIniciado={estaIniciado} />
      <div className="card">
        <button onClick={() => {
          setEstaIniciado(!estaIniciado)
        }}>
          {
            estaIniciado ? 'Pausar' : 'Iniciar'
          }
        </button>
        <button onClick={() => {

        }}>
          Reset
        </button>

      </div>

    </>
  )
}

export default App
