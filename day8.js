let name = 'hashim'
let age = 22
console.log(`hi ${name} your age is ${age}`)

let multiLine = `This is a multi-line string.
It can span multiple lines.
Template literals make it easy to include
line breaks and variable interpolation.`
console.log(multiLine)

// use array destructuring to extract first and second elment from an array of numbers and log them to console

let numbers = [1, 2, 3, 4, 5, 6, 7]
let [firstNumber, secondNumber] = numbers
console.log(firstNumber)
console.log(secondNumber)

// use object destructuring to extract title and author from  book object and log them to console

let book = {
  title: 'Computer Science',
  author: 'James frankin'

}

// object destructuring 

let { title, author } = book
console.log(`book title is :${title} and author name is : ${author}`)

let array1 = ['hashim', 'ibrahim', 'kashan', 'harris', 'gulraiz', 'wasif', 'hasnain']
let combinedArray = [...array1, 'abdullah', 'wajahat']
console.log(combinedArray)

// use spread operator in function to accept an arbitrary number of arguments sum them and return the result

function spreadOperator(...nums) {
  return nums.reduce((totol, num) => (totol + num), 0

  )
}

console.log(spreadOperator(12, 16, 14, 16, 19, 20))

let spreadOperat = (...nums) => {
  let result = nums.reduce((acc, cur) => acc + cur)
  return result
}

console.log(spreadOperat(12, 14, 12))

// write a function that takes two parameters and return their product with the second parameter having default value 1. log the result of calling this functin with and without second parameter

let product = (val1, val2 = 1) => {
  let sum = val1 * val2
  return sum
}
console.log(product(100))

// use enhanced object literals to create an object with methods and properties and log the object to the console 


let myName = 'hashim'
let myAge = 22
let field = 'web dev'

let personInfo = {
  myName,
  myAge,
  field,
  greet() {
    return `${this.myAge} welcome to Imtiaz Mall selected as a ${this.field} and your age is ${this.myAge}`
  }

}
console.log(personInfo)
console.log(personInfo.greet())
