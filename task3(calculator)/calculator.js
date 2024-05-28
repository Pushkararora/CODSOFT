let currentNumber = '';
let previousNumber = '';
let operation = undefined;

const display = document.getElementById('display');

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operation = undefined;
    updateDisplay();
}

function appendNumber(number) {
    if (number === '.' && currentNumber.includes('.')) return;
    currentNumber += number;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentNumber === '') return;
    if (previousNumber !== '') {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
}

function calculate() {
    let result;
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            if (current === 0) {
                alert("Division by zero is not allowed");
                return;
            }
            result = prev / current;
            break;
        default:
            return;
    }
    currentNumber = result.toString();
    operation = undefined;
    previousNumber = '';
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentNumber;
}

// Initialize the display
updateDisplay();
