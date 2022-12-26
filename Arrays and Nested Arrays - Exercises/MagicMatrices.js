function magicMatrix(matrix) {

    let isMagical = true;

    for (let index = 0; index < matrix.length - 1; index++) {

        let currentArray = matrix[index];
        let nextArray = matrix[index + 1];

        let sumOfCurrentArray = currentArray.reduce((acc, number) => acc + number, 0);
        let sumOfNextArray = nextArray.reduce((acc, number) => acc + number, 0);

        if (sumOfCurrentArray !== sumOfNextArray) {
            isMagical = false;
        }

    }

    let reversedMatrix = [];


    for (let row = 0; row < matrix.length; row++) {

        let currentColumnNumbers = [];

        for (let col = 0; col < matrix.length; col++) {

            currentColumnNumbers.push(matrix[col][row]);
        }
        reversedMatrix.push(currentColumnNumbers);

    }
    for (let row = 0; row < reversedMatrix.length - 1; row++) {

        let currentArray = reversedMatrix[row];
        let nextArray = reversedMatrix[row + 1];

        let sumOfCurrentArray = currentArray.reduce((acc, number) => acc + number, 0);
        let sumOfNextArray = nextArray.reduce((acc, number) => acc + number, 0);

        if (sumOfCurrentArray !== sumOfNextArray) {
            isMagical = false;
        }
    }

    console.log(isMagical);
}

magicMatrix([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
);