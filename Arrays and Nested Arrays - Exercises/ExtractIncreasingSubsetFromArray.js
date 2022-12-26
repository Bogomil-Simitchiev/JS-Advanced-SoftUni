function solve(array) {

    for (let index = 0; index < array.length - 1; index++) {

        let number = array[index];
        let nextNumber = array[index + 1];
        if (number > nextNumber) {
            let indexOfNextNumber = array.lastIndexOf(nextNumber);
            array.splice(indexOfNextNumber, 1);
            index--;
            continue;
        }

    }
    return array;

}
solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);
solve([1,
    2,
    3,
    4]
);