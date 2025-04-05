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
//display.textContent = "458745389";

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

// calling operate function
operate(userOperator);

// button events
// store content of the display (the number) in a variable
let displayVariable = "";

const btnClr = document.querySelector("#btnClr");
btnClr.addEventListener("click", () => {
  displayVariable = "";
  document.getElementById("display").textContent = displayVariable;
});

const btnExp = document.querySelector("#btnExp");
btnExp.addEventListener("click", () => {
  displayVariable += " ^ ";
  document.getElementById("display").textContent = displayVariable;
});

const btnMod = document.querySelector("#btnMod");
btnMod.addEventListener("click", () => {
  displayVariable += " % ";
  document.getElementById("display").textContent = displayVariable;
});

const btnDiv = document.querySelector("#btnDiv");
btnDiv.addEventListener("click", () => {
  displayVariable += " ÷ ";
  document.getElementById("display").textContent = displayVariable;
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => {
  displayVariable += "7";
  document.getElementById("display").textContent = displayVariable;
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", () => {
  displayVariable += "8";
  document.getElementById("display").textContent = displayVariable;
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", () => {
  displayVariable += "9";
  document.getElementById("display").textContent = displayVariable;
});

const btnMult = document.querySelector("#btnMult");
btnMult.addEventListener("click", () => {
  displayVariable += " * ";
  document.getElementById("display").textContent = displayVariable;
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
  displayVariable += "4";
  document.getElementById("display").textContent = displayVariable;
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
  displayVariable += "5";
  document.getElementById("display").textContent = displayVariable;
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
  displayVariable += "6";
  document.getElementById("display").textContent = displayVariable;
});

const btnSub = document.querySelector("#btnSub");
btnSub.addEventListener("click", () => {
  displayVariable += " - ";
  document.getElementById("display").textContent = displayVariable;
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  displayVariable += "1";
  document.getElementById("display").textContent = displayVariable;
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  displayVariable += "2";
  document.getElementById("display").textContent = displayVariable;
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  displayVariable += "3";
  document.getElementById("display").textContent = displayVariable;
});

const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
  displayVariable += " + ";
  document.getElementById("display").textContent = displayVariable;
});

const btnDec = document.querySelector("#btnDec");
btnDec.addEventListener("click", () => {
  displayVariable += " . ";
  document.getElementById("display").textContent = displayVariable;
});

const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", () => {
  displayVariable += "0";
  document.getElementById("display").textContent = displayVariable;
});

const btnBck = document.querySelector("#btnBck");
btnBck.addEventListener("click", () => {
  console.log("you clicked backspace");
  displayVariable =
    displayVariable.substring(0, displayVariable.length - 1) + "";
  document.getElementById("display").textContent = displayVariable;
});

const btnEqu = document.querySelector("#btnEqu");
btnEqu.addEventListener("click", () => {
  displayVariable += " = ";
  document.getElementById("display").textContent = displayVariable;
});
