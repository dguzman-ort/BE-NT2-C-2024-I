function saludo(nombre){
  console.log("Hola " + nombre)
}

//console.log(saludo, typeof saludo)

const o = new Object()

//console.log(o)

o.firstName = "Carlos"
o.lastName = "Tevez"
o.isTeaching = true
o.age = 33
o.friends = ["Ignacio", "Gabriel", "Luisa", 5.6, new Object() ]

o.sayHello = saludo



//console.log(o)


o.sayHello(o.friends[0])


delete o.lastName

console.log("o", o)




let cadena_objeto = JSON.stringify(o)

//console.log(cadena_objeto, typeof cadena_objeto)

cadena_objeto = JSON.parse(cadena_objeto)

//console.log(cadena_objeto, typeof cadena_objeto)



console.log("***************************")


const o2 = {}

console.log("o2", o2)


const key = "edad"
const value = 33

o2["firstName"] = "Daniel"
o2["lastName"] = "Guzman"
o2[key] = value

console.log(o2, o2["lastName"], o2.lastName)


console.log("***************************")

const o3 = {

  firstName: "Daniel",
  lastName: "Daniel",
  age: 33,
  phone: "11111111",
  academicLevel: [
    {
      title: "BS Computer Engineer",
      year: 2013
    },
    {
      title: "MSC Computer Engineer",
      year: 2019
    },

  ]

}


console.log(o3.academicLevel)
