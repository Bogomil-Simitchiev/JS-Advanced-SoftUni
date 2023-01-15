function focused() {
    let inputElements = document.querySelectorAll('input[type="text"]');

    for (let element of inputElements) {
        element.addEventListener('focus', function (e) {
            e.target.parentNode.className = 'focused';
        })
        element.addEventListener('blur', function (e) {
            e.target.parentNode.classList.remove("focused");
            e.target.value = '';
        })
    }

}