import { personas, EDAD_MINIMA } from './personas'

/**
 * CONSIGNA:realizar una funcion que dado un array de objetos persona devuelva
 * un nuevo array solamente con las personas que puedan entrar al casino
 * 
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */


function personasHabilitadas(lista){
  return lista.filter(persona => persona.age >=EDAD_MINIMA)
}

console.log(personas)

const validas = personasHabilitadas(personas)

console.log(validas)