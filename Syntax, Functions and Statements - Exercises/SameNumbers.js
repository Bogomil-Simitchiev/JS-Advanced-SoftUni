function solve(number) {
    let sum = 0;
    let IsEqual = true;

    number = number.toString();

    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] !== number[i + 1]) {
            IsEqual = false;
        }
        sum += Number(number[i]);

    }
    sum += Number(number[number.length - 1])
    console.log(IsEqual);
    console.log(sum);

}
solve(2222222);