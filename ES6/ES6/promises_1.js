const url = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/read'

const peticion = fetch(url)

const miCallback = function(respuesta){
  return respuesta.json()
}

peticion.then(() => {
  console.log("La promesa se completo con exito")
})
peticion.then(res => {
  console.log("respuesta", res)
})

peticion
.then(miCallback)
.then(data => {
  console.log(data)
})

peticion.catch(() => {
  console.error("La promesa no completo con exito")
})
peticion.finally(() => console.log("Se ejecuta no importando el estado de esa promesa"))