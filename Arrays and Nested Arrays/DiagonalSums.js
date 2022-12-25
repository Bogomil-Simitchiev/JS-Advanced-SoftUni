function diagonalSums(input) {

    let sums = [];

    let sumOfFirstDiagonal = 0;
    for (let row = 0; row < input.length; row++) {

        for (let col = 0; col < input[row].length; col++) {
            if (row == col) {
                sumOfFirstDiagonal += input[row][col];
            }
        }
    }
    sums.push(sumOfFirstDiagonal);

    // 20 40
    // 10 60

    let sumOfSecondDiagonal = 0;

    for (let row = 0; row < input.length; row++) {

        for (let col = 0; col < input[row].length; col++) {

            if ((row + col) == input.length - 1) {
                sumOfSecondDiagonal += input[row][col];
            }
        }

    }
    sums.push(sumOfSecondDiagonal);
    console.log(sums.join(' '));

}
diagonalSums([[20, 40], [10, 60]]);
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);