function generateReport() {
    //TODO
    let inputElements = Array.from(document.querySelectorAll('input'));

    let infoArray = Array.from(document.querySelectorAll('tbody tr'));
    let indexArray = [];

    let finalResult = [];

    for (let i = 0; i < inputElements.length; i++) {
        let inputElement = inputElements[i];
        if (inputElement.checked) {
            indexArray.push(i);
        }
    }
    for (let index = 0; index < infoArray.length; index++) {
        let employee = {};

        let tdArray = Array.from(infoArray[index].children);
        for (let index of indexArray) {
            let key = inputElements[index].name;
            let value = tdArray[index].textContent;
            employee[key] = value;
        }
        finalResult.push(employee);

    }
    let final = JSON.stringify(finalResult);
    document.getElementById('output').textContent = final;
}