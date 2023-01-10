function calc() {
    // TODO: sum = num1 + num2

    let firstNum = document.getElementById('num1');
    let secondNum = document.getElementById('num2');
    let sum = Number(firstNum.value) + Number(secondNum.value);
    let sumElement = document.getElementById('sum');
    sumElement.value = sum;

}