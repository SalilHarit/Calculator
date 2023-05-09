let result = document.getElementById('result');

function addNumber(num) {
    result.value += num;
}

function addOperator(operator) {
    result.value += operator;
}

function calculate() {
    let calculation = result.value;
    let answer = eval(calculation);
    result.value = answer;
}

function clearResult() {
    result.value = '';
}
