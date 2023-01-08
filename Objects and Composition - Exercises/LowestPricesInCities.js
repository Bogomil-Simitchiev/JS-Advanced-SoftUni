function lowestPrices(input) {

    let products = {};

    for (let line of input) {
        [townName, productName, price] = line.split(' | ');
        price = Number(price);

        if (!products.hasOwnProperty(productName)) {


            products[productName] = {
                townName,
                price,
            }
        } else {

            if (products[productName].price > price) {
                products[productName].price = price;
                products[productName].townName = townName;
            }

        }

    }
    for (const key in products) {
        console.log(`${key} -> ${products[key].price} (${products[key].townName})`);
    }
}
lowestPrices(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
);