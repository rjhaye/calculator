const buttons = document.querySelector(".calc-buttons");
const screen = document.querySelector(".screen");
let currentVal = 0;
let result = 0;
let number = 0;
let operation = "";

buttons.addEventListener("click", function (event) {
  if (!isNaN(event.target.innerText)) {
    if (screen.innerText === "0") {
      screen.innerText = event.target.innerText;
    } else {
      screen.innerText += event.target.innerText;
    }
    if (operation === "") {
      currentVal = Number.parseInt(screen.innerText);
    } else {
      number = Number.parseInt(screen.innerText);
    }
  } else {
    switch (event.target.innerText) {
      case "C":
        clearScreen();
        break;
      case "←":
        del();
        break;
      case "÷":
        clearScreen();
        operation = "division";
        break;
      case "×":
        clearScreen();
        operation = "multiplication";
        break;
      case "+":
        clearScreen();
        operation = "addition";
        break;
      case "-":
        clearScreen();
        operation = "subtraction";
        break;
      case "=":
        showResult();
    }
  }
});

function clearScreen() {
  screen.innerText = 0;
  operation = "";
}

function del() {
  const stringVal = currentVal.toString();
  if (stringVal.length > 1) {
    screen.innerText = stringVal.substring(0, stringVal.length - 1);
    currentVal = Number.parseInt(screen.innerText);
  } else {
    currentVal = 0;
    screen.innerText = 0;
  }
}

function showResult() {
  switch (operation) {
    case "division":
      result = currentVal / number;
      break;
    case "multiplication":
      result = currentVal * number;
      break;
    case "addition":
      result = currentVal + number;
      break;
    case "subtraction":
      result = currentVal - number;
      break;
  }
  screen.innerText = result;
  currentVal = result;
}