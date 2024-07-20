function checkNum(num) {
  if (num > 0) {
    console.log(`${num} is positive`)
  }
  else if (num < 0) {
    console.log(`${num} is negative`)
  }
  else if (num === 0) {
    console.log(`${num} is zero`)
  }
}

checkNum(0)

// write program to check if person is eligible for vote (if age>=18)

let age = 10
if (age >= 18) {
  console.log(`this person is eligible for vote`)
}
else if (age < 18) {
  console.log(`you are not eligible for the vote`)
}

// write program to find largest of three numbers
let num1 = 19
let num2 = 15
let num3 = 23

function largestNumber(a, b, c) {
  let largest;
  if (a >= b) {
    if (a >= c) {
      largest = a
    } else {
      largest = c
    }
  } else {
    if (b >= c) {
      largest = b
    }
    else {
      largest = c
    }
  }

  return largest

}

let result = largestNumber(1, 4, 8)
console.log(result)