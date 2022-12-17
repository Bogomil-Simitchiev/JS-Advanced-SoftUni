function largestNum(firstNum, secondNum, thirdNum) {

    let numbers = [firstNum, secondNum, thirdNum];
    let sorted = numbers.sort((a, b) => b - a);
    console.log(`The largest number is ${sorted[0]}.`);
}
largestNum(5, -3, 16);