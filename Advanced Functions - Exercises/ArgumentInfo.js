function displayType(...arguments) {

    let obj = {}
    for (let arg of arguments) {

        let type = typeof arg;
        console.log(`${type}: ${arg}`);
        if (!obj.hasOwnProperty(type)) {
            obj[type] = 1;
        } else {
            obj[type] += 1;
        }
    }
    let sortedObjects = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    for (let [key, value] of sortedObjects) {
        console.log(`${key} = ${value}`);
    }

}
displayType({ name: 'bob' }, 3.333, 9.999);