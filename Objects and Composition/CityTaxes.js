function cityTaxes(city, population, treasury) {

    //	collectTaxes() - Increase treasury by  population * taxRate
    //	applyGrowth(percentage) - Increase population by given percentage
    //	applyRecession(percentage) - Decrease treasury by given percentage
    
    let currentCity = {
        name: city,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    };
    return currentCity;

}
const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

console.log(city);

