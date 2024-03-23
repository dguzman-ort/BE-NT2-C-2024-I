const x = 40
console.log(x, typeof x)

const y = x.toString()

const array = [1,2,3]

console.log(array)

array.push(10)

console.log(typeof array, array.toString())

console.log(array.__proto__.toString)

array.__proto__.toString = function() {
  return 'hello world'
}

console.log(array.toString())


const array2 = [4,5,6]

console.log(array2.toString())