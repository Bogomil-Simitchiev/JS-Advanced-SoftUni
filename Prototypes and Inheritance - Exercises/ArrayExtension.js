(function () {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
    Array.prototype.skip = function (n) {
        let newArr = [];
        if (n < 0 || n > this.length) {
            throw new Error('Invalid index');
        }
        for (let index = n; index < this.length; index++) {

            newArr.push(this[index]);
        }
        return newArr;
    };
    Array.prototype.take = function (n) {
        let newArr = [];
        if (n < 0 || n > this.length) {
            throw new Error('Invalid index');
        }
        for (let index = 0; index < n; index++) {

            newArr.push(this[index]);
        }
        return newArr;
    };
    Array.prototype.sum = function () {
        let sum = 0;
        for (let index = 0; index < this.length; index++) {
            let element = this[index];
            sum += element;
        }
        return sum;
    };
    Array.prototype.average = function () {
        let sum = 0;
        for (let index = 0; index < this.length; index++) {
            let element = this[index];
            sum += element;
        }
        return sum / this.length;
    };
})();