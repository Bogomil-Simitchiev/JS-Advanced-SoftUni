function mathOperation(firstNumber, secondNumber, operator) {

    switch (operator) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);

            break;
        case '*':
            console.log(firstNumber * secondNumber);

            break;
        case '/':
            console.log(firstNumber / secondNumber);

            break;
        case '%':
            console.log(firstNumber % secondNumber);

            break;
        case '**':
            console.log(firstNumber ** secondNumber);

            break;
    }
}
mathOperation(5, 6, '+');
