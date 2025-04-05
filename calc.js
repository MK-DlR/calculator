/* calc.js */

// creating and styling header
const headerText = document.createElement("h2");
headerText.classList.add("headerText");
headerText.textContent = "Mathematical!";
headerText.style.textAlign = "center";
headerText.style.color = "#e98b55";
header.appendChild(headerText);

// creating and styling container element
const container = document.getElementById("container");
container.classList.add("container");
document.getElementById("container").style.width = "300px";
document.getElementById("container").style.height = "390px";

// display content
const display = document.getElementById("display");
display.classList.add("display");
display.textContent = "458745389";

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
