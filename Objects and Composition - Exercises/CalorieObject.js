function calorieObject(input) {

    let object = {};
    for (let index = 0; index < input.length - 1; index += 2) {

        let nameOfFood = input[index];
        let caloriesIn100grams = Number(input[index + 1]);
        object[nameOfFood] = caloriesIn100grams;

    }
    console.log(object);

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);