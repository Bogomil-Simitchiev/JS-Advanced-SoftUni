function negativePositiveNums(input) {

    let nums = [];

    for (let num of input) {
        if (num < 0) {
            nums.unshift(num);
        } else {
            nums.push(num);
        }
    }
    nums.forEach(el => console.log(el));

}
negativePositiveNums([3, -2, 0, -1]);
