function getFibonator() {

    let a = 0, b = 1;

    return function () {

        let c = a + b;
        a = b;
        b = c;
        return a;

    }
}
let nextFib = getFibonator();
console.log(nextFib()); // 1
console.log(nextFib()); // 1
console.log(nextFib()); // 2
console.log(nextFib()); // 3
console.log(nextFib()); // 5