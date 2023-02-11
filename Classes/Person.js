class Person {
    constructor(firstName, secondName, age, email) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.firstName} ${this.secondName} (age: ${this.age}, email: ${this.email})`;
    }
}
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());
