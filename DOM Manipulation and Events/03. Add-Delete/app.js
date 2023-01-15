function addItem() {
    //TODO...
    let inputElement = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = inputElement.value;

    let linkElement = document.createElement('a');
    linkElement.href = '#';
    linkElement.textContent = "[Delete]";
    linkElement.addEventListener('click', function (event) {
        event.currentTarget.parentNode.remove();
    })

    let ulElement = document.getElementById('items');
    if (inputElement.value != '') {
        liElement.appendChild(linkElement);
        ulElement.appendChild(liElement);
        inputElement.value = '';
    }

}