function limpiarInterval(id){
  clearInterval(id)
}

function imprimirUno(){
  console.log("uno")
}

function imprimirDos(){
  console.log("Dos")
}

function imprimirTres(){
  console.log("Tres")
}

console.log(typeof imprimirUno)

setTimeout(imprimirUno, 5000)
setTimeout(imprimirDos)
setTimeout(imprimirTres)


console.log("Hola mundo... yo me tengo que ejecutar de primero")

var interval = setInterval(imprimirUno, 1000)

console.log(interval)


setTimeout(() => {
  clearInterval(interval)
}, 10000)

