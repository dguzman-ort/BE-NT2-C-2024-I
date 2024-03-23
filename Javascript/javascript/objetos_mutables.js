let o1 = {
  a: 'a',
  b: 'b',
  c: function() { console.log(hola) },
  obj: {
    key: 'key'
  }
}

const o2 = o1

console.log(o1, o2)

o2.a = 'Z'

console.log(o1,o2)


o1.b = 'Y'

console.log(o1,o2)

o2.d = 'd'

console.log(o1,o2)



// Con esto garantizamos que no reutilizamos el puntero de memoria de O1. 
//Sino que solamente asignamos los atributos de o1 en o3
const o3 = Object.assign({}, o1)

console.log(o3)

o3.a = "New value"

console.log(o1, o2, o3)


o3.obj.key = 'otra key'

console.log(o1, o2, o3)



/**
 * 
 * Deep Copy.
 *
 */
// Copiado en cascada

function deepCopy(obj) {
  // verifica si los valores son objetos
  // Si son objetos copio ese objeto a sí mismo
  // Sino retorno el valor
  const keys = Object.keys(obj)

  //console.log(keys)

  const newObject = {}

  for (let i = 0; i < keys.length; i++) {    
    const key = keys[i]
    
    if (typeof obj[key] === 'object') {
      newObject[key] = deepCopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }

  //console.log("debe retornar", newObject)

  return newObject
}


const o4 = deepCopy(o1)

o4.a = "valor nuevo o4"

o4.obj.key = "Key para o4"

console.log(o1,o4)