function sumLengths(first, second, third) {

    let firstLeng = first.length;
    let secondLeng = second.length;
    let thirdLeng = third.length;

    let sum = firstLeng + secondLeng + thirdLeng;
    let average = Math.floor(sum / 3);
    console.log(sum);
    console.log(average);


}
sumLengths('chocolate', 'ice cream', 'cake');