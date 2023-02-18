class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullName = this._firstName + ' ' + this._firstName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
        this.fullName = this.firstName + ' ' + this.lastName;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
        this.fullName = this.firstName + ' ' + this.lastName;
    }

    get fullName() {
        return this._fullName;
    }
    set fullName(value) {
        let splitInfo = value.split(' ');
        if (splitInfo.length == 2) {
            this._fullName = value;
            this._firstName = splitInfo[0];
            this._lastName = splitInfo[1];
        }

    }

}

let person = new Person("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson
