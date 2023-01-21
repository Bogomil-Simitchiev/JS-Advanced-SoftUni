function sortArray(array, word) {
    function ascending(input) {
        return input.sort((a, b) => a - b);
    }
    function descending(input) {
        return input.sort((a, b) => b - a);

    }
    switch (word) {
        case 'asc':
            array = ascending(array);
            return array;

        case 'desc':
            array = descending(array);
            return array;

    }
}
sortArray([14, 7, 17, 6, 8], 'asc');