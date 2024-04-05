import { personas } from './personas'
/**
 * Ejemplo de reduce. Sumando todas las edades del listado de personas.
 */

console.log(personas)

const sumEdad = personas.reduce((acarreo, persona) => {
  console.log(persona, acarreo)
  return acarreo + persona.age
}, 0)

console.log("Valor de la suma de las edades es: ", sumEdad)





/**
 * CONSIGNA FINAL: Dada una lista de contactos, crear una funcion que agrupe los 
 * contactos segun la primera letra de su nombre (nombre completo). 
 * Esta seria la estructura esperada:
 * 
 * {
 * 
 *    F: [{}, {}, ..., {} ],
 *    C: [{}, {}, ..., {}]
 *    L: [{nombreCompleto: "Landa, Gabriel", edad: 48, telefono: "22-121-941"}, ..., {}]
 * 
 * }
 * 
 */





/**
 * 
 * CONSIGNA FINAL: Con el objeto de contactos agrupados por la primera letra (resultante del anterior), devolver un array agrupado por titulo (primera letra) y ordenado alfabeticamente
 * 
 * 
 * Ejemplo: 
 * 
 * [
 *    {
 *      "title": "A",
 *      "data": [{},{}...]
 *    },
 *    {
 *      "title": "C",
 *      "data": [{},{}...]
 *    },
 *    {
 *      "title": "F",
 *      "data": [{},{}...]
 *    },
 * ]
 */