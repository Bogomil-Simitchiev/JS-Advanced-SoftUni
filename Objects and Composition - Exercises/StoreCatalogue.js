function store(input) {

    let products = {};

    for (const line of input) {

        [nameOfproduct, priceOfProduct] = line.split(' : ');
        products[nameOfproduct] = Number(priceOfProduct);
    }
    
    let entries = Object.entries(products);

    entries.sort((a, b) => a[0].localeCompare(b[0]));

    let set = new Set();
    entries.forEach((a, b) => set.add(a[0][0]));

    let arrOfChars = Array.from(set);

    while (arrOfChars.length > 0) {

        let char = arrOfChars.shift();
        console.log(char);
        for (let [key, value] of entries) {
            if (char == key[0]) {
                console.log('  ' + key + ': ' + value);
            }
        }
    }

}
store(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);