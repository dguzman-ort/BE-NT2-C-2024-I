
const MAX_CONTACT_SIZE = 10000

const nombres = ['Carlos', 'Paula', 'Lionel', 'Elena', 'Mateo', `Enzo`]
const apellidos = ['Messi', 'Perez', 'Romero', 'Gomez', 'Di Maria', `Martinez`]

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;


const generaNombre = () => `${nombres[random(0, nombres.length - 1)]}`
const generaApellido = () => `${apellidos[random(0, apellidos.length - 1)]}`


//Telefono seria: 55-555-555
const generarTelefono = () => `${random(10, 99)}-${random(100, 999)}-${random(100, 999)}`

const crearContacto = () => {
  return {
    fullName: `${generaApellido()}, ${generaNombre()}`,
    phone: generarTelefono(),
    age: random(18, 99)
  }
}



const getContacts = () => {
  //TODO: Va a buscar en una API la informacion de contactos
  //return Array.from({ length: 10 }, crearContacto)
  return new Promise((resolve, reject) => {
    
      return resolve(Array.from({ length: MAX_CONTACT_SIZE }, crearContacto))
    
  })
}


export default {
  getContacts
}