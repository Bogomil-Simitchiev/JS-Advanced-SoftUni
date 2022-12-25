function biggestNumber(input) {

    let number = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < input.length; row++) {

        for (let col = 0; col < input[row].length; col++) {

            if (input[row][col] >= number) {
                number = input[row][col];
            }
        }
    }
    return number;
    
}
console.log(biggestNumber([[20, 50, 10], [8, 33, 145]]));

console.log(biggestNumber([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]]));