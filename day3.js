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


// write a program to that uses switch case to determine day of the week based on number (1-7) and log the day name on console

const day = 6

switch (day) {
  case 1:
    console.log('today is monday')
    break
  case 2:
    console.log('today is 2nd day of week')
    break
  case 3:
    console.log('today is third day of week')
    break
  case 4:
    console.log('today is thursday  of week')
    break
  case 5:
    console.log('today is friday of week')
    break
  case 6:
  case 7:
    console.log("its week end")
    break
  default:
    console.log('not valid day name')

}