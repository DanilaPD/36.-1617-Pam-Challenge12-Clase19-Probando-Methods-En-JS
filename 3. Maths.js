const number1 = 7;
const number2 = 8;
const pi = 3.141516;
const string = "155";

// Doing Maths:
console.log(`Addition: 7 + 8`);

console.log(`Addition: ${7 + 8}`);

console.log(`Addition: ${number1 + number2}`);

console.log(`Subtraction: ${number1 - number2}`);

console.log(`Multiplication: ${number1 * number2}`);

console.log(`Division: ${number1 / number2}`);

console.log(`To the second power: ${number1 ** number2}`);

console.log(`Remainder: ${number2 % number1}`);

// Decimals:
//Fixing the quantity of decimals
console.log(`To Fixed: ${pi.toFixed(2)}`);

console.log(`To Fixed: ${pi.toFixed(35)}`);

//Rounding off
console.log(`To Floor: ${Math.floor(pi)}`);

console.log(`To Ceil: ${Math.ceil(pi)}`);

// Square root:
console.log(`Calculating the square root: ${Math.sqrt(36)}`);

// Random number:
//Between 0 & 1
console.log(`Getting a random number: ${Math.random().toFixed(2)}`);
//Between 1 & 10
let random = Math.random().toFixed(1);
console.log(parseFloat(random) * 10);

// Changing the type of variable:
//A String into a Number
console.log("Transforming the String into a Number: ", Number(string));

console.log("Transforming the String into a Number: ", parseInt(string));

console.log(
  "Transforming the String into a Number: ",
  typeof Number(string),
  Number(string)
);
//A Number into a String
console.log("Transforming the Number into a String: ", number1.toString());

//Original type of the variable:
console.log(typeof string);
