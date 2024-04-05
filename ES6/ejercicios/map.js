import { personas, EDAD_MINIMA } from './personas'

/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas`
 * devuelva un array con un atributo `allowed` (_boolean_) que indique 
 * si puede entrar o no en un casino
 */

console.log(personas)

const validarEdad = (edad) => edad >= EDAD_MINIMA


/*const agregarAllowed = (elemento) => {
  const aux = Object.assign({}, elemento)
  aux.allowed = validarEdad(aux.age)
  return aux
}*/


const agregarAllowed = (elemento) => {
  return {
    ...elemento,
    allowed: validarEdad(elemento.age)

  }
}

const array = personas.map(agregarAllowed)

console.log(personas, array)