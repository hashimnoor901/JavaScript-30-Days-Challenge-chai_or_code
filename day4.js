for (let i = 1; i <= 10; i++) {
  console.log(i)
}
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i}= ${i * 5}`)
}

// write program to print sum of numbers from 1 to 10 using while loop
let i = 1
let sum = 0

while (i < 10) {
  i++
  sum += i

}
console.log(`sum = ${sum}`)

// write a program to print numbers from 10 to 1 using while loop

let num = 11

while (num > 1) {
  num--
  console.log(num)

}


let score = 1
do {
  console.log(`score is ${score}`)
  score++
} while (score < 10);

let numb = 1
do {
  console.log(`number is ${numb}`)
  numb++

} while (numb <= 5);

// write a program to print pattern using nested for loop

for (let i = 0; i <= 5; i++) {
  let starPattern = ''
  for (let j = 0; j < i; j++) {
    starPattern += '*'
  }
  console.log(starPattern)

}



// write a program to print numbers from 1 to 10 but skip the number 5 using contineu statement.

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue
  }
  console.log(`value is ${i}`)

}

//write a program to print numbers from 1 to 10 but stop  the loop when number is 7 using break statement.
for (let i = 0; i < 10; i++) {
  if (i == 7) {
    break

  }
  console.log(i)
}

// write a script that print number from 1 to 10 using for and while loop

for (let i = 1; i <= 10; i++) {
  console.log(i)
}

// same by while loop
let number = 1
while (number <= 10) {
  console.log(number)
  number++

}

// create a scritp that prints multiplication table of 5 using for loop

for (let i = 0; i <= 5; i++) {
  console.log(`5 X ${i} = ${i * 5}`)

}

// write a script that print pattern of stars usnig nested loop

for (let i = 0; i <= 5; i++) {
  let star = ''

  for (let j = 0; j < i; j++) {
    star += '*'

  }
  console.log(star)


}


// write a script that calculates the sum of numbers from 1 to 10 using while loop

let nubr = 1
let totalSum = 0
while (nubr <= 10) {
  totalSum += nubr
  nubr++
}
console.log(totalSum)


// write a script to print factorial of nmber using do while loop

let numbr = 10
let fact = 1
let j = 1
do {
  factorial *= i

  j++
} while (j <= numbr);
console.log(fact)