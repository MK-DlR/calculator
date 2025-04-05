/* calc.js */

// operation variables
// with temporary values for testing
let userNum1 = 5;
let userOperator = "+";
let userNum2 = 3;

// operate function
function operate() {
  let result;
  switch (userOperator) {
    case "+":
      result = userNum1 + userNum2;
      break;
    case "-":
      result = userNum1 - userNum2;
      break;
    case "*":
    case "x":
      result = userNum1 * userNum2;
      break;
    case "/":
      result = userNum1 / userNum2;
      break;
    case "%":
      result = userNum1 % userNum2;
      break;
    case "^":
      result = userNum1 ** userNum2;
      break;
    default:
      console.log("Error");
  }
  console.log(result);
  return result;
}

operate(userOperator);
