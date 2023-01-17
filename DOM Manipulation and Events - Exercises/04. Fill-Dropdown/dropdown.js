function addItem() {

    let inputTextElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');

    let optionElement = document.createElement('option');
    optionElement.textContent = inputTextElement.value;
    optionElement.value = inputValueElement.value;

    let selectElement = document.getElementById('menu');
    if (inputTextElement.value != '' && inputValueElement.value != '') {
        selectElement.appendChild(optionElement);
        inputTextElement.value = '';
        inputValueElement.value = '';
    }

}