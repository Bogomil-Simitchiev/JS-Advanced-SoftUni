function sumElements(array, startIndex, endIndex) {

    endIndex += 1;
    let isEverythingRight = true;
    if (!Array.isArray(array)) {
        isEverythingRight = false;
        return NaN;
    }
    let isNaNBool = false;
    for (let element of array) {
        if (isNaN(element)) {
            isNaNBool = true;
        }
    }
    if (isNaNBool) {
        isEverythingRight = false;
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex >= array.length) {
        endIndex = array.length;
    }
    if (isEverythingRight) {
        let sum = 0;
        for (let index = startIndex; index < endIndex; index++) {
            let element = Number(array[index]);
            sum += element;
        }
        return sum;
    }

}
console.log(sumElements([10, 20, 30, 40, 50, 60], 3, 300));
