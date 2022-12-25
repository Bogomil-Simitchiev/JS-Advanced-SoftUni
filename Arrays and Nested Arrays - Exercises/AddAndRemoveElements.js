function addAndRemove(input) {

    let arr = [];
    let number = 1;
    for (let command of input) {
        if (command == "add") {
            arr.push(number);

        } else {

            let index = arr.indexOf(number);
            arr.splice(index, 1);

        }
        number++;

    }
    if (arr.length == 0) {

        console.log('Empty');

    } else {

        arr.forEach(num => console.log(num));
    }

}
addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']
);

addAndRemove(['add',
    'add',
    'add',
    'add']
);