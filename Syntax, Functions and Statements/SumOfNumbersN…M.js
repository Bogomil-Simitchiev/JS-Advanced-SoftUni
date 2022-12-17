function sumOfNumbers(n, m) {

    n = Number(n);
    m = Number(m);

    let sum = 0;

    for (let index = n; index <= m; index++) {

        sum += index;
    }
    console.log(sum);

}
sumOfNumbers('1', '5');