let resultEntries = []

function getUserInput() {
  return +userInput.value
}

function getCurrentResult() {
  return +currentResultOutput.textContent
}

function getCurrentCalcExpression() {
  return currentCalculationOutput.textContent
}

function outputResultDescription(operator) {
  return `${getCurrentResult()} ${operator} ${getUserInput()}`
}

function addResultToHistory() {
  resultEntries.push({
    expression: getCurrentCalcExpression(),
    result: getCurrentResult(),
  })
}

function printResultHistory() {
  console.clear()
  console.log(resultEntries)
}

function calculate(operator) {
  let result

  if (operator === '+') {
    result = getCurrentResult() + getUserInput()
  } else if (operator === '-') {
    result = getCurrentResult() - getUserInput()
  } else if (operator === '*') {
    result = getCurrentResult() * getUserInput()
  } else if (operator === '/') {
    result = getCurrentResult() / getUserInput()
  } else return
  outputResult(result, outputResultDescription(operator))
  addResultToHistory()
  printResultHistory()
}

function add() {
  calculate('+')
}

function subtract() {
  calculate('-')
}

function multiply() {
  calculate('*')
}

function divide() {
  calculate('/')
}

function clearData() {
  userInput.value = 0
  currentResultOutput.textContent = 0
  currentCalculationOutput.textContent = 0
  resultEntries = []
  console.clear()
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
clearBtn.addEventListener('click', clearData)
