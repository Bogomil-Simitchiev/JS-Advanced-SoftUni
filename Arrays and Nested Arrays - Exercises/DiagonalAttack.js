function diagonalAttack(input) {

    let matrix = [];

    for (let row of input) {
        matrix.push(row.split(' '));
    }

    let sumFirstDiagonal = 0;
    let sumSecondDiagonal = 0;

    function checkSumsOfDiagonalsInMatrix(firstSum, secondSum, matrix) {
        if (firstSum == secondSum) {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix.length; col++) {

                    if (row != col && (row + col) != matrix.length - 1) {
                        matrix[row][col] = sumFirstDiagonal;
                    }

                }
            }
        }
        return matrix;

    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {

            if (row == col) {
                sumFirstDiagonal += Number(matrix[row][col]);
            }
            if ((row + col) == matrix.length - 1) {
                sumSecondDiagonal += Number(matrix[row][col]);
            }

        }
    }

    matrix = checkSumsOfDiagonalsInMatrix(sumFirstDiagonal, sumSecondDiagonal, matrix);

    matrix.forEach(row => console.log(row.join(' ')));

}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']
);