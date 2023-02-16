function registerForCompany(input) {

    let carBrand = new Map();

    for (const line of input) {
        let splitInfo = line.split(' | ');
        let brand = splitInfo[0];
        let model = splitInfo[1];
        let producedCars = Number(splitInfo[2]);

        if (!carBrand.has(brand)) {
            let car = {
                model,
                producedCars,
            }
            carBrand.set(brand, [car]);
        } else {
            let lastCars = carBrand.get(brand);
            let hasModel = false;
            for (const objectCar of lastCars) {
                if (objectCar.model == model) {
                    hasModel = true;
                }
            }
            if (hasModel) {
                for (const objectCar of lastCars) {
                    if (objectCar.model == model) {
                        objectCar.producedCars += producedCars;
                    }
                }

            } else {
                let car = {
                    model,
                    producedCars,
                }
                lastCars.push(car);
            }
            carBrand.set(brand, lastCars);
        }
    }
    for (const [key, value] of carBrand) {
        console.log(key);
        for (const car of value) {
            console.log(`###${car.model} -> ${car.producedCars}`);
        }
    }

}
registerForCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);