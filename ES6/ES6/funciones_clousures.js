console.log("**** Clousure ****")

function helloFunction(){

  var mensaje = "hola mundo"
  var edad = 18
  var pais = "Argentina"

  function sayHello(){
    return mensaje
  }

  return {
    getMensaje: sayHello,
    getEdad: edad,
    getPais: pais
  }

}


const clousure = helloFunction()

console.log(clousure.getEdad)