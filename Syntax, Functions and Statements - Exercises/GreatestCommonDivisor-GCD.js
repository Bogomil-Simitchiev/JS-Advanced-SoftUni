function solve(first, second) {
    let min = Math.min(first, second);
    while (true) {
        if (min % first == 0 && min % second == 0) {
            break;
        }
        min++;
    }
    let result = (first * second) / min;
    console.log(result);
}
solve(15, 5);