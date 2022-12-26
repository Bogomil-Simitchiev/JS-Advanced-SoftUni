function rotateArray(array, numberOfRotations) {

    for (let index = 0; index < numberOfRotations; index++) {

        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));

}
rotateArray(['1', '2', '3', '4'], 2);