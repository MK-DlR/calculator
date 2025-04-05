/* calc.js */

// temporary number variables
let a = 8;
let b = 2;

// operation variables
let userNum1;
let userOperator;
let userNum2;

// math functions
// addition
function add(a, b) {
  console.log(a + b);
  return a + b;
}

// subtraction
function subtract(a, b) {
  console.log(a - b);
  return a - b;
}

// multiplication
function multiply(a, b) {
  console.log(a * b);
  return a * b;
}

// division
function divide(a, b) {
  console.log(a / b);
  return a / b;
}

// modulo
function modulo(a, b) {
  console.log(a % b);
  return a % b;
}

// calling functions to test
add(a, b);
subtract(a, b);
multiply(a, b);
divide(a, b);
modulo(a, b);
