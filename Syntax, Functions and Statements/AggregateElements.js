function aggregateElements(input) {

    let sumOfNums = (array) => {
        let sum = 0;
        array.forEach(el => sum += el);
        return sum;
    };
    let sumOfNumsDividedByOne = (array) => {
        let sum = 0;
        array.forEach(el => sum += 1 / el);
        return sum;
    };
    let concatNumsToText = (array) => {
        let text = '';
        array.forEach(el => text += el);
        return text;
    };
    console.log(sumOfNums(input));
    console.log(sumOfNumsDividedByOne(input));
    console.log(concatNumsToText(input));

}
aggregateElements([1, 2, 3]);