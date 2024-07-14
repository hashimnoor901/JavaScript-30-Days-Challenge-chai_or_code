let num1 = 101
let num2 = 99
const result = num1 + num2
console.log(`result is :${result}`)


let numOne = 2000
let numTwo = 1000
const subtractResult = numOne - numTwo
console.log(`Subtract is: ${subtractResult}`)

const multiplyResult = numOne * numTwo
console.log(`multipy is : ${multiplyResult}`)


const divisionResult = numOne / numTwo
console.log(`divisiotn is ${divisionResult}`)

const remainderResult = numOne % numTwo
console.log(`Remainder REsult is:${remainderResult}`)

let valTwo = 2000
let AssingnmentVal = numOne += valTwo
console.log(AssingnmentVal)

AssingnmentVal = valTwo -= 1000
console.log(AssingnmentVal)

let value1 = 10000
let value2 = 10090
console.log(value1)
value1 += value2

// console.log(`Val1 + val2 ${finalResult}`)
console.log(value1 > value2)
console.log(value1 < value2)

console.log(value1, value2)
let greaterEqual = value2 > value1
console.log(`GreaterEqual ${greaterEqual}`)

let volume1 = 10000
let volume2 = 20000
let resultOne = volume1 >= volume2
let resultTwo = volume1 <= volume2
console.log(resultOne)
console.log(resultTwo)


// resultOne = volume1 == volume2
resultOne = volume1 === volume2
console.log(resultOne)

let andOperator = volume1 && volume2
console.log(andOperator)

let logedIn = true
let logout = false
if (logedIn && logout) {
  console.log(`both are  true`)
}
else {
  console.log(`both are not true`)
}

if (logedIn || logout) {
  console.log(`one of them is true`)
}

if (!logout) {
  console.log(`user is loggedin`)
}
let LastNum = 100

let resultfinal = LastNum ? LastNum < 0 : LastNum > 0
console.log(resultfinal)

// Function to check if a number is positive or negative
function checkNumber(num) {
  const result = num < 0 ? "Negative" : "Positive";
  console.log(result);
}

// Example usage
checkNumber(-1);   // log negative
checkNumber(10)


let number1 = 190
let number2 = 200

let Addition = number1 + number2
let subtraction = number1 - number2
let division = number1 / number2
let multiply = number1 * number2
let remainder = number1 % number2
console.log(`Addiiton ${Addition}, Subtraction ${subtraction} , division: ${division}, remainder : ${remainder} and multiplication ${multiply}`)


let numb1 = 1000
let numb2 = 2000
let resultFile = numb1 > numb2

let resultFile2 = numb1 < numb2
if (resultFile && resultFile2) {
  console.log(`both are true`)
}
if (resultFile || resultFile2) {
  console.log(`one of them is true`)
}

