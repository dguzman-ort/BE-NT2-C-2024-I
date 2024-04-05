const saludar = (function(){
  var mensaje = "hola mundo"

  console.log(mensaje)
  
  function saludando(){
    console.log(`Mensaje dentro del clousure: ${mensaje}`)
  }

  return saludando

})()

console.log(typeof saludar)

saludar()
saludar()
saludar()
saludar()
saludar()


const counter = (function(){
  var contador = 0

  console.log("Inicializacion de objeto counter.....")

  function showContador(){
    console.log(contador)
  }

  const inc = function(){
    contador = contador + 1
  }

  const dec = () => {
    contador--
  }


  return {
    showContador,
    inc,
    dec
  }

})()

console.log(counter, typeof counter)

counter.showContador()
counter.inc()
counter.inc()
counter.inc()
counter.showContador()
counter.dec()
counter.showContador()






