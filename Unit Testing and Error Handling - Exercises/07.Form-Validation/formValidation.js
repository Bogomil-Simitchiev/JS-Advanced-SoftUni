function validate() {
    // TODO
    let btnElement = document.getElementById('submit');
    btnElement.addEventListener('click', (e) => {
        e.preventDefault();

        // check for the username 
        const regexForUsername = /^[a-zA-Z0-9]{3,20}$/gm;
        if (!regexForUsername.test(document.getElementById('username').value)) {
            document.getElementById('username').style.borderColor = 'red';
            document.getElementById('valid').style.display = 'none';
        } else {
            document.getElementById('username').style.borderColor = '';
            document.getElementById('valid').style.display = 'block';

        }
        // TODO: check the password and confirm-password

    })
}
