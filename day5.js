// werite a function to check if number is even or odd

function checkNum(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`)
  }
  else {
    console.log(`${num} is odd`)
  }

}
checkNum(3)
checkNum(203432434)

// write a program to calculate square of number and return its result

function numSquare(num) {
  let result = num ** 2
  console.log(`square of ${num} is ${result}`)
  return result
}
numSquare(121)

const maxOfTwo = function (num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`)
  }
  else if (num1 < num2) {
    console.log(`${num2} is greater than ${num1}`)
  }

}
maxOfTwo(11, 14)

// write a functin to concatenate two strings and return the result

const concateStrings = function (str1, str2) {
  let result = str1 + str2
  return result
}

console.log(concateStrings('hashim', 'noor'))

// write a arrow functin to calculate sum of two numbers and return result

const addNums = (num1, num2) => {
  let result = num1 + num2
  return result
}
console.log(addNums(12, 15))


// write a function to check if string contains specific caharcter and return boolean value

const checkStr = (str, word) => {
  return str.includes(word)
}
console.log(checkStr("Hashim", 'g'))


// write a function that takes 2 parameters and return thier product provide default value for second parameter

const addProduct = (val1, val2 = 15) => {
  let product = val1 + val2
  return product
}
console.log(addProduct(12))


const greetings = (name, age = 22) => {
  let greet = `welcome to our shop ${name} and ${age} `
  return greet
}
console.log(greetings('hashim'))

// higher order functions

let langs = ['c++', 'java', 'c', 'goland', 'typescript', 'javascript']

langs.forEach((item) => {
  console.log(item)
})


//write higher order function that takes function and a number and calls the function that many times

function repeatFun(fn, times) {
  for (let i = 0; i < times; i++) {
    fn()
  }
}

function sayHello() {
  console.log("Hello i am hashim")
}
repeatFun(sayHello, 4)

const HigherFun = (fn, time) => {
  let i = 0
  while (i < time) {
    fn()
    i++
  }

}
function goodBye() {
  console.log("good bye")
}
HigherFun(goodBye, 3)

// write higher order function that take two function and value applies the first function to the value and then applies the second function to the result



const HigherOrder = (func1, func2, value) => {
  const result1 = func1(value)
  const result2 = func2(result1)
  return result2
}

const func1 = (val) => {
  return val - 5
}

const func2 = (val) => {
  return val + 100
}

console.log(HigherOrder(func1, func2, 5))


function CheckEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is even`)
  }
  else {
    console.log(`${num} is odd`)

  }
}

CheckEvenOdd(3)

const numbSquare = (num) => {
  return num ** 2
}
console.log(numbSquare(3))


const concateString = (str1, str2) => {
  return str1.concat(str2)
}
console.log(concateString('hashim', 'maliha'))


const calculateSum = (num1 = 12, num2 = 30) => {
  let sum = num1 + num2
  return sum
}

console.log(calculateSum(122))


const MultiplyFun = (fn, time) => {
  for (let i = 0; i < time; i++) {
    fn()
  }
}
function fn() {
  console.log("hello i am higher order function")
}
MultiplyFun(fn, 3)


