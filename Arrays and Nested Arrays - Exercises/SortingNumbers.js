function sortingNumbers(input) {

    let array = [];
    input.sort((a, b) => a - b);
    while (input.length > 0) {

        array.push(input.shift());
        array.push(input.pop());

    }

    return array;

}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));