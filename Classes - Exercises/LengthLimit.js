class Stringer {
    constructor(innerString, innerLength) {
        this.RealString = innerString;
        this.innerString = innerString;
        this.innerLength = innerLength;
        if (this.innerString.length > innerLength) {
            this.innerString = this.RealString.substr(0, this.innerLength);
            this.innerString += '...';
        }
    }
    increase(length) {
        this.innerLength += length;
        if (this.innerString.length > this.innerLength) {
            this.innerString = this.RealString.substr(0, this.innerLength);
            this.innerString += '...';
        } else {
            this.innerString = this.RealString.substr(0, this.innerLength);
        }


    }
    decrease(length) {
        this.innerLength -= length;
        if (this.innerLength <= 0) {
            this.innerLength = 0;
            this.innerString = '...';
        } else {
            this.innerString = this.RealString.substr(0, this.innerLength);
            this.innerString += '...';
        }
    }
    toString() {
        return this.innerString;
    }
}
let test = new Stringer('test', 5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(5);
console.log(test.toString());
test.increase(4);
console.log(test.toString());
test.decrease(1);
console.log(test.toString());

