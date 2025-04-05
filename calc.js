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

// calling operate function
operate(userOperator);

// button events
// store content of the display (the number) in a variable

const btnClr = document.querySelector("#btnClr");
btnClr.addEventListener("click", () => {
  console.log("you clicked clear");
});

const btnExp = document.querySelector("#btnExp");
btnExp.addEventListener("click", () => {
  console.log("you clicked exponentiation");
});

const btnMod = document.querySelector("#btnMod");
btnMod.addEventListener("click", () => {
  console.log("you clicked modulo");
});

const btnDiv = document.querySelector("#btnDiv");
btnDiv.addEventListener("click", () => {
  console.log("you clicked divide");
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", () => {
  console.log("you clicked the number 7");
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", () => {
  console.log("you clicked the number 8");
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", () => {
  console.log("you clicked the number 9");
});

const btnMult = document.querySelector("#btnMult");
btnMult.addEventListener("click", () => {
  console.log("you clicked multiply");
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () => {
  console.log("you clicked the number 4");
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
  console.log("you clicked the number 5");
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", () => {
  console.log("you clicked the number 6");
});

const btnSub = document.querySelector("#btnSub");
btnSub.addEventListener("click", () => {
  console.log("you clicked subtract");
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
  console.log("you clicked the number 1");
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  console.log("you clicked the number 2");
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () => {
  console.log("you clicked the number 3");
});

const btnAdd = document.querySelector("#btnAdd");
btnAdd.addEventListener("click", () => {
  console.log("you clicked add");
});

const btnDec = document.querySelector("#btnDec");
btnDec.addEventListener("click", () => {
  console.log("you clicked decimal point");
});

const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", () => {
  console.log("you clicked the number 0");
});

const btnBck = document.querySelector("#btnBck");
btnBck.addEventListener("click", () => {
  console.log("you clicked backspace");
});

const btnEqu = document.querySelector("#btnEqu");
btnEqu.addEventListener("click", () => {
  console.log("you clicked equals");
});
