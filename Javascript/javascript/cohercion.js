
let x = 17



const explicito = String(x)

console.log(x, typeof x)
console.log(explicito, typeof explicito)


console.log(x == explicito)
console.log(x === explicito)


const implicita = x + ""

console.log("implicito", implicita, typeof implicita)


x = false

console.log(x, typeof x)



let invalido

console.log("invalido", invalido, typeof invalido)



const objeto = null

console.log("objeto", objeto, typeof objeto)

console.log(invalido == objeto)
console.log(invalido === objeto)


if ("t"){
  console.log("Hello")
}