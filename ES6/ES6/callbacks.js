function obtenerUsuarioBD(callback){
  // Esta funcion simula una llamada a una API y/o una BD
  //setTimeout(() => {

    const userData = {
      firstName: 'Sergio',
      lastName: 'Cusa',
      age: 15
    }

    // suponiendo que tengo una llamada al back y esta dura unos 1000ms, 
    // invoco el callback en la respuesta
    return callback(userData)

  //}, 2000)

}

function saludoUser(user){
  console.log(`Hola ${user.firstName} ${user.lastName}, como estas?`) 
}

function validateAge(user){
  if (user.age >= 18){
    console.log(`Hi ${user.firstName} ${user.lastName}, welcome to Banana`) 
  }else{
    console.warn(`Sorry!`) 
  }
}

obtenerUsuarioBD(saludoUser)

//obtenerUsuarioBD(console.log)
//obtenerUsuarioBD(console.warn)

obtenerUsuarioBD(validateAge)



