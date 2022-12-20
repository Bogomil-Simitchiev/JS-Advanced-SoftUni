function validityChecker(x1, y1, x2, y2) {

    function distance(x1, y1, x2, y2) {

        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    let X = Number.isInteger(distance(x1, y1, 0, 0));
    let Y = Number.isInteger(distance(x2, y2, 0, 0));
    let both = Number.isInteger(distance(x1, y1, x2, y2));
    if (X) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Y) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (both) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

}
validityChecker(2, 1, 1, 1);