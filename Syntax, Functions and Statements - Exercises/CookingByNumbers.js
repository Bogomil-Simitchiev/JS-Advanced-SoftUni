function cookingByNumbers(number, first, second, third, forth, fifth,) {

    number = Number(number);
    let arrOfOperations = [first, second, third, forth, fifth];

    // 	chop - divide the number by two
    //  dice - square root of a number
    //  spice - add 1 to the number
    //  bake - multiply number by 3
    //  fillet - subtract 20% from the number

    for (let operation of arrOfOperations) {

        switch (operation) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);

                break;
            case 'fillet':
                number -= number * 0.20;
                console.log(number);

                break;
        }
    }

}
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');