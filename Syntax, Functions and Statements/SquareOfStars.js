function printRectangle(input) {
    if (input == null) {
        for (let i = 0; i < 5; i++) {

            let stars = "";
            for (let j = 0; j < 5; j++) {
                stars += '* ';

            }
            console.log(stars);

        }
    } else {
        for (let i = 0; i < input; i++) {

            let stars = "";
            for (let j = 0; j < input; j++) {
                stars += '* ';

            }
            console.log(stars);

        }
    }
}
printRectangle(7);