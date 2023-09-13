let currentInput = "";
let operator = "";
let firstValue = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  document.getElementById("display").value = "";
  currentInput = "";
  firstValue = "";
  operator = "";
}

function calculateResult() {
  try {
    const secondValue = currentInput;
    let result;

    switch (operator) {
      case "+":
        result = parseFloat(firstValue) + parseFloat(secondValue);
        break;
      case "-":
        result = parseFloat(firstValue) - parseFloat(secondValue);
        break;
      case "*":
        result = parseFloat(firstValue) * parseFloat(secondValue);
        break;
      case "/":
        result = parseFloat(firstValue) / parseFloat(secondValue);
        break;
      case "%":
        result = (parseFloat(firstValue) * parseFloat(secondValue)) / 100;
        break;
      default:
        result = parseFloat(secondValue);
        break;
    }

    document.getElementById("display").value = result;
    currentInput = result.toString();
    firstValue = "";
    operator = "";
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function eraseDigit() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById("display").value = currentInput;
}

function appendOperator(op) {
  if (operator === "") {
    firstValue = currentInput;
    currentInput = "";
    operator = op;
  } else {
    calculateResult();
    operator = op;
    firstValue = currentInput;
    currentInput = "";
  }
}
