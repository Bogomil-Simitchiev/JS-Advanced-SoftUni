function circleArea(input) {

    let typeOfInput = typeof (input);
    if (typeOfInput == 'number') {
        let areaOfCircle = Number(input) * Number(input) * Math.PI;
        console.log(areaOfCircle.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`);
    }
}
circleArea('name');