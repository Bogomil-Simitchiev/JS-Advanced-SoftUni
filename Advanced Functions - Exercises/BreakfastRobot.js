function solution() {

    let object = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    // •	apple - made with 1 carbohydrate and 2 flavour
    // • 	lemonade - made with 10 carbohydrate and 20 flavour
    // •	burger - made with 5 carbohydrate, 7 fat and 3 flavour
    // •	eggs - made with 5 protein, 1 fat and 1 flavour
    // •	turkey - made with 10 protein, 10 carbohydrate, 10 fat and 10 flavour

    return function (text) {
        let splitText = text.split(' ');

        if (splitText[0] == 'restock') {
            object[splitText[1]] += Number(splitText[2]);
            return `Success`;
        } else if (splitText[0] == 'prepare') {

            let meal = splitText[1];
            let text = '';
            switch (meal) {
                case 'apple':
                    let quantity = Number(splitText[2]);
                    if (object['carbohydrate'] < quantity * 1) {
                        text = 'Error: not enough carbohydrate in stock';
                    }
                    else if (object['flavour'] < quantity * 2) {
                        text = 'Error: not enough flavour in stock';
                    } else {
                        object['carbohydrate'] -= quantity * 1;
                        object['flavour'] -= quantity * 2;
                        text = 'Success';
                    }
                    break;
                case 'lemonade':
                    let quantityLemonade = Number(splitText[2]);
                    if (object['carbohydrate'] < quantityLemonade * 10) {
                        text = 'Error: not enough carbohydrate in stock';
                    }
                    else if (object['flavour'] < quantityLemonade * 20) {
                        text = 'Error: not enough flavour in stock';
                    } else {
                        object['carbohydrate'] -= quantityLemonade * 10;
                        object['flavour'] -= quantityLemonade * 20;
                        text = 'Success';
                    }
                    break;
                case 'burger':
                    let quantityBurger = Number(splitText[2]);
                    if (object['carbohydrate'] < quantityBurger * 5) {
                        text = 'Error: not enough carbohydrate in stock';
                    }
                    else if (object['fat'] < quantityBurger * 7) {
                        text = 'Error: not enough fat in stock';
                    }
                    else if (object['flavour'] < quantityBurger * 3) {
                        text = 'Error: not enough flavour in stock';
                    } else {
                        object['carbohydrate'] -= quantityBurger * 5;
                        object['fat'] -= quantityBurger * 7;
                        object['flavour'] -= quantityBurger * 3;
                        text = 'Success';
                    }
                    break;
                case 'eggs':
                    let quantityEgg = Number(splitText[2]);
                    if (object['protein'] < quantityEgg * 5) {
                        text = 'Error: not enough protein in stock';
                    }
                    else if (object['fat'] < quantityEgg * 1) {
                        text = 'Error: not enough fat in stock';
                    }
                    else if (object['flavour'] < quantityEgg * 1) {
                        text = 'Error: not enough flavour in stock';
                    } else {
                        object['protein'] -= quantityEgg * 5;
                        object['flavour'] -= quantityEgg * 1;
                        object['fat'] -= quantityEgg * 1;
                        text = 'Success';
                    }
                    break;
                case 'turkey':
                    let quantityTukey = Number(splitText[2]);
                    if (object['protein'] < quantityTukey * 10) {
                        text = 'Error: not enough protein in stock';
                    }
                    else if (object['carbohydrate'] < quantityTukey * 10) {
                        text = 'Error: not enough carbohydrate in stock';
                    }
                    else if (object['fat'] < quantityTukey * 10) {
                        text = 'Error: not enough fat in stock';
                    }
                    else if (object['flavour'] < quantityTukey * 10) {
                        text = 'Error: not enough flavour in stock';
                    } else {
                        object['protein'] -= quantityTukey * 10;
                        object['flavour'] -= quantityTukey * 10;
                        object['fat'] -= quantityTukey * 10;
                        object['carbohydrate'] -= quantityTukey * 10;
                        text = 'Success';
                    }
                    break;
            }
            return text;


        } else if (splitText[0] == 'report') {
            return `protein=${object['protein']} carbohydrate=${object['carbohydrate']} fat=${object['fat']} flavour=${object['flavour']}`;
        }
    }

}
let manager = solution();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));

// prepare turkey 1
// restock protein 10
// prepare turkey 1
// restock carbohydrate 10
// prepare turkey 1
// restock fat 10
// prepare turkey 1
// restock flavour 10
// prepare turkey 1
// report
