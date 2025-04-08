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
document.getElementById("container").style.width = "275px";
document.getElementById("container").style.height = "350px";
document.getElementById("container").style.paddingTop = "15px";
document.getElementById("container").style.paddingBottom = "10px";
container.style.backgroundColor = "#2a3a56";
container.style.border = "solid";
container.style.borderWidth = "medium";
document.getElementById("container").style.borderRadius = "4px";
// display
tempDisplay = "0";
document.getElementById("display").textContent = tempDisplay;

// display content
const display = document.getElementById("display");
display.classList.add("display");
display.style.border = "solid";
display.style.borderWidth = "medium";
display.style.borderColor = "black";

// operation variables
// with temporary values for testing
let temp1 = [];
let userNum1 = 0;
let userNum2 = 0;
// max input and result length
let inputCount = 0;
let maxLength = 18;
// operator variable
let userOperator;
// display variable
let displayVariable = "";
// decimal
let decimalCount = 0;

// operate function
function operate() {
  // console.log(`Calculating: ${userNum1} ${userOperator} ${userNum2}`); // debug log
  if (userOperator === undefined) return userNum1;
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
      if (userNum2 === 0) {
        result = "Cannot divide by zero!";
        document.getElementById("display").textContent = result;
      } else {
        result = userNum1 / userNum2;
      }
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
  // console.log(`Result: ${result}`); // debug log
  if (typeof result === "number") {
    let resultStr = result.toString();
    if (resultStr.length > 17) {
      if (Math.abs(result) < 1e16 && Math.abs(result) > 1e-6) {
        result = result.toFixed(10);
      } else {
        result = result.toExponential(10);
      }
      result = result.toString().slice(0, 17);
    }
  }
  return result;
}

// calling operate function
operate(userOperator);

// clearing display function
function clearDisplay() {
  displayVariable = "";
  temp1 = [];
  decimalCount = 0;
  document.getElementById("display").textContent = tempDisplay;
}

// zero out calculator
function zeroCalculator() {
  displayVariable = "";
  temp1 = [];
  userNum1 = 0;
  userNum2 = 0;
  decimalCount = 0;
}

// reset after pressing enter
function resetAfterEquals() {
  temp1 = [];
  userNum2 = 0;
  displayVariable = "";
}

// limit number length
function limitLength() {
  if (inputCount >= maxLength) {
    console.log("Error: Too many digits");
    return false;
  }
  inputCount++;
  return true;
}

// store first variable function triggered by operators
function storeFirstVariable() {
  if (userNum1 === 0) {
    userNum1 = Number(temp1.join(""));
    temp1 = [];
    displayVariable = "";
  } else {
    console.log("error");
  }
}

// store second variable function triggered by enter
function storeSecondVariable() {
  if (temp1.length > 0) {
    userNum2 = Number(temp1.join(""));
    temp1 = [];
    displayVariable = "";
  } else {
    console.log("Error: No second number.");
  }
}

// handling operator function
function handleOperator(op) {
  if (userOperator && temp1.length > 0) {
    userNum2 = Number(temp1.join(""));
    const result = operate();
    userNum1 = result;
    userNum2 = 0;
    temp1 = [];
    displayVariable = result.toString();
  } else if (temp1.length > 0) {
    userNum1 = Number(temp1.join(""));
    temp1 = [];
    displayVariable = "";
  }
  userOperator = op;
  document.getElementById("display").textContent = op;
  temp1 = [];
  displayVariable = "";
  decimalCount = 0;
  inputCount = 0;
}

// button events
// operators
btnAdd.addEventListener("click", () => handleOperator("+"));
btnSub.addEventListener("click", () => handleOperator("-"));
btnMult.addEventListener("click", () => handleOperator("*"));
btnDiv.addEventListener("click", () => handleOperator("/"));
btnMod.addEventListener("click", () => handleOperator("%"));
btnExp.addEventListener("click", () => handleOperator("^"));

// numbers
for (let i = 0; i <= 9; i++) {
  const btn = document.getElementById(`btn${i}`);
  btn.addEventListener("click", () => {
    if (!limitLength()) return;
    displayVariable += i;
    temp1.push(i.toString());
    display.textContent = displayVariable;
  });
}

// decimal
document.getElementById("btnDec").addEventListener("click", () => {
  if (!limitLength()) return;
  if (decimalCount >= 1) {
    return;
  }
  displayVariable += ".";
  temp1.push(".");
  decimalCount++;
  document.getElementById("display").textContent = displayVariable;
});

// clear
document.getElementById("btnClr").addEventListener("click", () => {
  zeroCalculator();
  clearDisplay();
});

// backspace
document.getElementById("btnBck").addEventListener("click", () => {
  displayVariable =
    displayVariable.substring(0, displayVariable.length - 1) + "";
  document.getElementById("display").textContent = displayVariable;
});

// equals
document.getElementById("btnEqu").addEventListener("click", () => {
  storeSecondVariable();
  const result = operate();
  document.getElementById("display").textContent = result;
  userNum1 = result;
  decimalCount = 0;
  resetAfterEquals();
});
