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
// operator variable
let userOperator;
// display variable
let displayVariable = "";

// operate function
function operate() {
  console.log(`Calculating: ${userNum1} ${userOperator} ${userNum2}`); // debug log
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
  console.log(`Result: ${result}`); // debug log
  return result;
}

// calling operate function
operate(userOperator);

// clearing display function
function clearDisplay() {
  displayVariable = "";
  temp1 = [];
  document.getElementById("display").textContent = tempDisplay;
}

// zero out calculator
function zeroCalculator() {
  displayVariable = "";
  temp1 = [];
  userNum1 = 0;
  userNum2 = 0;
}

// reset after pressing enter
function resetAfterEquals() {
  temp1 = [];
  userNum2 = 0;
  displayVariable = "";
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
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  displayVariable += 1;
  temp1.push("1");
  document.getElementById("display").textContent = displayVariable;
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  displayVariable += 2;
  temp1.push("2");
  document.getElementById("display").textContent = displayVariable;
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  displayVariable += 3;
  temp1.push("3");
  document.getElementById("display").textContent = displayVariable;
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
  displayVariable += 4;
  temp1.push("4");
  document.getElementById("display").textContent = displayVariable;
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
  displayVariable += 5;
  temp1.push("5");
  document.getElementById("display").textContent = displayVariable;
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
  displayVariable += 6;
  temp1.push("6");
  document.getElementById("display").textContent = displayVariable;
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => {
  displayVariable += 7;
  temp1.push("7");
  document.getElementById("display").textContent = displayVariable;
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", () => {
  displayVariable += 8;
  temp1.push("8");
  document.getElementById("display").textContent = displayVariable;
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", () => {
  displayVariable += 9;
  temp1.push("9");
  document.getElementById("display").textContent = displayVariable;
});

const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", () => {
  displayVariable += 0;
  temp1.push("0");
  document.getElementById("display").textContent = displayVariable;
});

const btnDec = document.querySelector("#btnDec");
btnDec.addEventListener("click", () => {
  displayVariable += ".";
  temp1.push(".");
  document.getElementById("display").textContent = displayVariable;
});

// clear
const btnClr = document.querySelector("#btnClr");
btnClr.addEventListener("click", () => {
  zeroCalculator();
  clearDisplay();
});

// backspace
const btnBck = document.querySelector("#btnBck");
btnBck.addEventListener("click", () => {
  displayVariable =
    displayVariable.substring(0, displayVariable.length - 1) + "";
  document.getElementById("display").textContent = displayVariable;
});

// equals
const btnEqu = document.querySelector("#btnEqu");
btnEqu.addEventListener("click", () => {
  storeSecondVariable();
  const result = operate();
  document.getElementById("display").textContent = result;
  userNum1 = result;
  resetAfterEquals();
});
