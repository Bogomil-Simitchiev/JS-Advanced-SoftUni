function lastKNumbers(n, k) {

    let numbers = [];
    numbers.push(1);
    while (n > 1) {

        let LastKelements = numbers.slice(-k);
        let sum = 0;
        LastKelements.forEach(element => {
            sum += Number(element);
        });
        numbers.push(sum);

        n--;
    }
    return numbers;

}
console.log(lastKNumbers(6, 3)); 