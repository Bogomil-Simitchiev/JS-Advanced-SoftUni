function carFactory(object) {

    let smallEngine = 90 - object.power;
    let normalEngine = 120 - object.power;
    let bigEngine = 200 - object.power;

    let newObject = {};
    newObject.model = object.model;

    let arr = [smallEngine, normalEngine, bigEngine];

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            arr[index] *= -1;
        }

    }
    arr.sort((a, b) => a - b);

    if (smallEngine == arr[0]) {

        let engine = {
            power: 90,
            volume: 1800,
        }
        newObject.engine = engine;

    } else if (normalEngine == arr[0]) {

        let engine = {
            power: 120,
            volume: 2400,
        }
        newObject.engine = engine;

    } else if (bigEngine == arr[0]) {

        let engine = {
            power: 200,
            volume: 3500,
        }
        newObject.engine = engine;

    }
    let carriage = {

    }

    switch (object.carriage) {
        case 'hatchback':
            carriage = {
                type: 'hatchback',
                color: object.color,
            }
            break;
        case 'coupe':
            carriage = {
                type: 'coupe',
                color: object.color,
            }
            break;
    }
    newObject.carriage = carriage;

    if (object.wheelsize % 2 == 0) {
        let newWheelSize = object.wheelsize - 1;
        let arrayOfWheels = [newWheelSize, newWheelSize, newWheelSize, newWheelSize];
        newObject.wheels = arrayOfWheels;
    } else {
        let arrayOfWheels = [object.wheelsize, object.wheelsize, object.wheelsize, object.wheelsize];
        newObject.wheels = arrayOfWheels;
    }
    return newObject;

}
console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}));