function createSortedList() {

    let collection = [];

    function checkIndex(index) {
        return index >= 0 && index < collection.length;
    }
    let object = {
        add(num) {
            collection.push(num);
            this.size++;
            collection.sort((a, b) => a - b);
        },
        remove(index) {
            const valid = checkIndex(index);
            if (valid) {
                collection.splice(index, 1);
                this.size--;
            }
        },
        get(index) {
            const valid = checkIndex(index);

            if (valid) {
                return collection[index];
            }
        },
        size: 0,
    };

    return object;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
