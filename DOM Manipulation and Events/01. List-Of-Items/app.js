function addItem() {

    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    if (inputElement.value != '') {
        liElement.textContent = inputElement.value;
        ulElement.appendChild(liElement);
    }

}