function townPopulation(input) {

    let infoForCities = {};

    for (let text of input) {

        let splitText = text.split(' <-> ');
        let city = splitText[0];
        let population = Number(splitText[1]);

        if (infoForCities.hasOwnProperty(city)) {
            infoForCities[city] += population;
        }
        else {
            infoForCities[city] = population;
        }

    }

    for (let key in infoForCities) {
        console.log(`${key} : ${infoForCities[key]}`);
    }

}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

);