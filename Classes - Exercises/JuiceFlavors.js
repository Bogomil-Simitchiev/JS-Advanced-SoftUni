function juiceFlavors(input) {

    function checkPossibleBottles(quantity) {
        let bottlesCount = 0;
        while (quantity >= 1000) {
            quantity -= 1000;
            bottlesCount += 1;
        }
        return bottlesCount;
    }

    let mapFlavors = new Map();

    let finalMap = new Map();

    for (let line of input) {
        [juice, quantity] = line.split(' => ');

        if (!mapFlavors.has(juice)) {
            mapFlavors.set(juice, Number(quantity))
        } else {
            let lastQuantity = mapFlavors.get(juice);
            mapFlavors.set(juice, lastQuantity + Number(quantity));
        }

        let lastQuantity = mapFlavors.get(juice);
        let bottles = checkPossibleBottles(lastQuantity);
        if (bottles > 0) {
            finalMap.set(juice, bottles);
        }


    }
    for (const [key, value] of finalMap) {
        console.log(`${key} => ${value}`);
    }
}
juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']

);