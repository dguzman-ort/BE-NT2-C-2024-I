(async function (){
  console.log("Vamos a ejecutar el codigo dentro de una funcion")

  const url = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read'

  const buscarPersona = (id) =>{
    return new Promise((completado, rechazado) => {
      fetch(`${url}/${id}`)
      .then(res => {
        if(res.status === 200){
          return completado(res.json())
        }else{
          throw new Error('No se encontro nada')
        }
      })
      .catch(error => {        
        return rechazado(error)
      })
    })
  }


/**
 * Trabajo con promesas de forma asincrona (como usualmente se hace en el front)
 */
/*
const persona = buscarPersona('16c879b9-c373-42ea-8b55-56b2dd240d3e')
persona
.then(data => console.log(data))
.catch((error) => {
  console.error("Error: No se puede obtener la data")
})
*/


try{

const persona = await buscarPersona('16c879b9-c373-42ea-8b55-56b2dd240d3e')

console.log(persona)

}catch(error){
  console.error("No se pudo obtener a la persona: ", error)
}



console.log("Sigo con mi ejecucion!!!")









})()