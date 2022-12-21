function biggerHalf(input) {

    input.sort((a, b) => a - b);
    let half = input.slice(input.length / 2);
    return half;
}
biggerHalf([4, 7, 2, 5]);