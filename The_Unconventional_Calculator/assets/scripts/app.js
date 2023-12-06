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

function clearData() {
  userInput.value = 0
  currentResultOutput.textContent = 0
  currentCalculationOutput.textContent = 0
  resultEntries = []
  console.clear()
}

addBtn.addEventListener('click', calculate.bind(this, '+'))
subtractBtn.addEventListener('click', calculate.bind(this, '-'))
multiplyBtn.addEventListener('click', calculate.bind(this, '*'))
divideBtn.addEventListener('click', calculate.bind(this, '/'))
clearBtn.addEventListener('click', clearData)
