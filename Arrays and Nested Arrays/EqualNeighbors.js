function neighbors(input) {

    let countOfneighbors = 0;

    for (let row = 0; row < input.length; row++) {

        let array = input[row];
        for (let rowForArray = 0; rowForArray < array.length - 1; rowForArray++) {
            if (array[rowForArray] === array[rowForArray + 1]) {
                countOfneighbors++;
            }
        }
    }
    for (let row = 0; row < input.length - 1; row++) {

        for (let col = 0; col < input[row].length; col++) {

            if (input[row][col] === input[row + 1][col]) {
                countOfneighbors++;
            }

        }

    }

    return countOfneighbors;

}
console.log(neighbors([[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]]));