function lockedProfile() {

    let btnElements = document.querySelectorAll('.profile button');

    for (let btnElement of btnElements) {
        btnElement.addEventListener('click', (e) => {

            for (let radioElement of e.target.parentNode.querySelectorAll('input[type="radio"]')) {
                if (radioElement.checked) {
                    if (radioElement.value == "unlock") {
                        let divElement = e.target.parentNode.querySelector('div');
                        if (divElement.style.display != 'block') {
                            divElement.style.display = 'block';
                            e.currentTarget.textContent = 'Hide it'
                        } else {
                            divElement.style.display = 'none';
                            e.currentTarget.textContent = 'Show more'
                        }

                    }
                }
            }

        })
    }
}