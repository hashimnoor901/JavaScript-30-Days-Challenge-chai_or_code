// create an array of numers from 1 to 5  and log the array
let array = [1, 2, 3, 4, 5]
console.log(array)

let firstElement = array[0]
console.log(firstElement)

let lastElement = array[array.length - 1]
console.log(lastElement)

array.push(6)
console.log(array)

array.pop()
console.log(array)

array.shift()
console.log(array)

array.unshift(1, 2)
console.log(array)

// use a map method to create a new array where each number is double and log the result
// map return new array and doesnot modify array
let newArray = [1, 2, 3, 4, 5]
let updated = newArray.map((num) => (
  num * 2
))

// it doesnot return new array also modify array
let forEachMethod = newArray.forEach((num) => (
  num * 2
))
console.log(updated)
console.log(updated)


// use filter method to create new array with only even numbers and log the new array
let evenArray = [1, 3, 4, 6, 9, 10, 4, 23, 33, 12, 12, 3]

let evenNumbersArray = evenArray.filter((num) => (
  num % 2 === 0
))
console.log(evenNumbersArray)

console.log(evenArray)

let reduceFunArray = evenArray.reduce((acc, curVal) => (
  acc + curVal
), 0)
console.log(`sum of array is :${reduceFunArray}`)

// use for loop to iterate over the array and log each element to the console

let arr = ['hashim', 'noor', 'maliha', 'waseem']

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// use foreach method to iterate over the array and log each element to the console

let newArr = ['hashim', 'noor', 'loves', 'maliha', 'waseem']

newArr.forEach((item) => (
  console.log(item)
))


let twoDimentionArr = [
  [1, 5, 8],
  [5, 9, 1]
]
console.log(twoDimentionArr[0])
console.log(twoDimentionArr[1])

//acces and log specific element from twoD aray

console.log(twoDimentionArr[1][2])
console.log(twoDimentionArr[0][1])

