function sum(input) {

    let sum = Number(input[0]) + Number(input[input.length - 1]);

    return sum;
}
console.log(sum(['20', '30', '40']));