// ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
// Use the test variables provided.


const divByThree = (num) => {
  if (num%3===0) {
    console.log(`${num} is divisible by three`)
  } else {
    console.log(`${num} is not divisible by three`)
}}


//Test
var num1 = 15

// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"


//Testing
console.log(divByThree(num1))
console.log(divByThree(num2))
console.log(divByThree(num3))


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]

const capIt = (array) => {
  return array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
}

console.log("streetlamp".charAt(0).toUpperCase() + "streetlamp".slice(1))
console.log("streetlamp"[1])
console.log(capIt(randomNouns))

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
// Expected output: [-8, 0, 8, 46, 59, 90, 107]

const onlyNum = (array) => {
  return array.filter(value => typeof value === "number").sort(function(a,b){return a-b})
}

console.log(onlyNum(mixedDataArray))

// --------------------4) Create a function that takes in a string and logs the index of the first vowel.
// Use the test variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "throw"
// Expected output: 3

const vowelTester = (str) => {
  let vowels = ["a", "e", "i", "o", "u"]
  str.split("")
  for (let i=0; i<str.length; i++) {
    if (vowels.includes(str[i])) {
      return i
    }
  }
}

console.log(vowelTester(vowelTester1))
console.log(vowelTester(vowelTester2))



// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

const calculator = (num1, str, num2) => {
  if (str === "/" && num2 === 0) {
    return "Can't divide by 0!"
  } else {
    if (str === "+") {
      return num1 + num2
    } else if (str === "-") {
      return num1 - num2
    } else if (str === "*") {
      return num1 * num2
    } else if (str === "/") {
      return num1 / num2
    }
  }
}





// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))
// Expected output: 27

console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
