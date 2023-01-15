function validate() {
    let inputElement = document.getElementById('email');


    inputElement.addEventListener('change', function (e) {
        let pattern = /[a-z]+\@[a-z]+\.[a-z]+/g;
        let match = pattern.exec(e.currentTarget.value);
        if (match == null) {
            e.currentTarget.className = 'error';
        } else {
            e.currentTarget.classList.remove('error');
        }

    })
}