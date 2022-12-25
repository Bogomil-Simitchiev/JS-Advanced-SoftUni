function printBySteps(array, number) {

    let arr = [];
    for (let i = 0; i < array.length; i += number) {
        const element = array[i];
        arr.push(element);
    }
    return arr;

}
console.log(printBySteps(['5', '20', '31', '4', '20'], 2));