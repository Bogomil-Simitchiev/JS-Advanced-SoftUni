function processOddPositions(input) {

    let nums = [];

    input.forEach((element, index) => {
        if (index % 2 !== 0) {
            nums.push(element * 2);
        }

    });

    return nums.reverse();

}
processOddPositions([10, 15, 20, 25]);