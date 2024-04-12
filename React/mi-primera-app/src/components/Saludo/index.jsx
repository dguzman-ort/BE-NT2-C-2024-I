// function Saludo(prop){
  
//   return (
//     prop.active ? 
//       <h3>Hello {prop.nombre}</h3> 
//       :
//       <></>
//   )
// }

function Saludo({nombre, active}){
  
  return (
    active ? 
      <h3>Hello {nombre}</h3> 
      :
      <></>
  )
}


export default Saludo