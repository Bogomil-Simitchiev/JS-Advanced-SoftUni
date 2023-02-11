function getPersons() {
    class Person {
        constructor(firstName, secondName, age, email) {
            this.firstName = firstName !== undefined ? firstName : '';
            this.secondName = secondName !== undefined ? secondName : '';
            this.age = age !== undefined ? age : '';
            this.email = email !== undefined ? email : '';
        }
        toString() {
            return `${this.firstName} ${this.secondName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    let arrayOfPersons = [];
    let firstPerson = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
    let secondPerson = new Person('SoftUni');
    let thirdPerson = new Person('Stephan', 'Johnson', 25,);
    let forthPerson = new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com');
    arrayOfPersons.push(firstPerson, secondPerson, thirdPerson, forthPerson);
    return arrayOfPersons;

}
console.log(getPersons());