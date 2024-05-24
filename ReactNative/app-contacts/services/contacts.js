
const MAX_CONTACT_SIZE = 10000

const BASE_URL = 'https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/'

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
    
      // return resolve(Array.from({ length: MAX_CONTACT_SIZE }, crearContacto))
      fetch(`${BASE_URL}read`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer xxxx"
        }
      })
      .then(res => {
        if (res.status === 200) {
          return resolve(res.json())
        }else{
          return reject('Error al obtener los contactos')
        }
      })
  })
}

const getContactById = (id) => {
  //TODO: Va a buscar en una API la informacion de contactos
  //return Array.from({ length: 10 }, crearContacto)
  return new Promise((resolve, reject) => {
    
      fetch(`${BASE_URL}read/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer xxxx"
        }
      })
      .then(res => {
        if (res.status === 200) {
          return resolve(res.json())
        }else{
          return reject('Error al obtener los contactos')
        }
      })
  })
}

const createContact = (contact) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer xxxx"
      },
      body: JSON.stringify(contact)
    })
    .then(res => {
      if (res.status === 200) {
        return resolve(res.json())
      }else{
        return reject('Error al crear contacto')
      }
    })
  })
}

const updateContact = (id, contact) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer xxxx"
      },
      body: JSON.stringify(contact)
    })
    .then(res => {
      if (res.status === 200) {
        return resolve(true)
      }else{
        return reject('Error al actualizar contacto')
      }
    })
  })
}

const deleteContact = (id) => {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer xxxx"
      }
    })
    .then(res => {
      if (res.status === 200) {
        return resolve(true)
      }else{
        return reject('Error al eliminar contacto')
      }
    })
  })
}

export default {
  getContacts,
  getContactById,
  createContact,
  deleteContact,
  updateContact
}