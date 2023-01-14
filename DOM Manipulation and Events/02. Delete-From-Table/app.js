function deleteByEmail() {

    let inputElement = document.getElementsByTagName('input')[0];
    let resultElement = document.getElementById('result');
    let emailsElements = document.querySelectorAll('tbody tr');


    for (let element of emailsElements) {
        if (element.textContent.includes(inputElement.value) && inputElement.value != '') {
            element.parentNode.removeChild(element);
            resultElement.textContent = "Deleted."
        } else {
            resultElement.textContent = "Not found."
        }

    }
}