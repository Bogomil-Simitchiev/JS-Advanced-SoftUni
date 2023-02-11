function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
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