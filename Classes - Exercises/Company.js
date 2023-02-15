class Company {
    departments = {};
    addEmployee(name, salary, position, department) {
        if ((name == '' || name == undefined || name == null) || (salary == '' || salary == undefined || salary == null || Number(salary) < 0) || (position == '' || position == undefined || position == null) || (department == '' || department == undefined || department == null)) {
            throw new Error('Invalid input!');
        } else {
            if (!this.departments.hasOwnProperty(department)) {
                let emp = {
                    name: name,
                    salary: salary,
                    position: position
                }
                this.departments[department] = [emp];
            } else {
                let emp = {
                    name: name,
                    salary: salary,
                    position: position
                }
                this.departments[department].push(emp);
            }
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }

    }
    bestDepartment() {
        let bestDepartment = '';
        let highestAverageSalary = 0;
        let entries = Object.entries(this.departments);
        for (let [key, value] of entries) {

            let valuesOfKeys = Object.values(value);
            let sum = valuesOfKeys.reduce((acc, sum) => acc + sum.salary, 0);
            sum /= valuesOfKeys.length;

            if (sum > highestAverageSalary) {
                highestAverageSalary = sum;
                bestDepartment = key
            }

        }
        let employees = Object.values(this.departments[bestDepartment]).sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => b.salary - a.salary);
        let output = [];
        output.push(`Best Department is: ${bestDepartment}`);
        output.push(`Average salary: ${highestAverageSalary.toFixed(2)}`);

        for (const employee of employees) {
            output.push(`${employee.name} ${employee.salary} ${employee.position}`);
        }
        return output.join('\n');

    }
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
