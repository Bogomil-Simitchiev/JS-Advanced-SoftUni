function validate() {
    
    let btnElement = document.getElementById('submit');

    let boolForUsername = false;
    let boolForPasswords = false;
    let boolForEmail = false;
    let boolForCompanyNumber = false;

    btnElement.addEventListener('click', (e) => {
        e.preventDefault();

        // check for the username 
        const regexForUsername = /^[A-Za-z0-9]{3,20}$/gm;
        if (!regexForUsername.test(document.getElementById('username').value)) {
            document.getElementById('username').style.borderColor = 'red';
            document.getElementById('valid').style.display = 'none';
            boolForUsername = false;
        } else {
            document.getElementById('username').style.borderColor = '';
            boolForUsername = true;
        }

        // check for the password

        let passwordElement = document.getElementById('password');
        let confirmPasswordElement = document.getElementById('confirm-password');
        const regexForPassword = /^[\w]{5,15}$/;
        if (!regexForPassword.test(passwordElement.value) || confirmPasswordElement.value !== passwordElement.value) {
            document.getElementById('password').style.borderColor = 'red';
            document.getElementById('confirm-password').style.borderColor = 'red';
            document.getElementById('valid').style.display = 'none';
            boolForPasswords = false;
        } else {
            document.getElementById('password').style.borderColor = '';
            document.getElementById('confirm-password').style.borderColor = '';
            boolForPasswords = true;

        }
        //check for the email
        const regexForEmail = /^[^@.]+@[^@]*\.[^@]*$/gm;
        let emailInputElement = document.getElementById('email');
        if (!regexForEmail.test(emailInputElement.value)) {
            document.getElementById('email').style.borderColor = 'red';
            document.getElementById('valid').style.display = 'none';
            boolForEmail = false;

        } else {
            document.getElementById('email').style.borderColor = '';
            boolForEmail = true;

        }

        if (boolForUsername && boolForPasswords && boolForEmail && !document.getElementById('company').checked) {
            document.getElementById('valid').style.display = 'block';
        }
        else if (document.getElementById('company').checked) {
            let companyInputNumberElement = document.getElementById('companyNumber');
            if (Number(companyInputNumberElement.value) >= 1000 && Number(companyInputNumberElement.value) <= 9999) {
                boolForCompanyNumber = true;
            } else {
                boolForCompanyNumber = false;
            }
            if (boolForCompanyNumber == false) {
                companyInputNumberElement.style.borderColor = 'red';
            } else {
                companyInputNumberElement.style.borderColor = '';
            }
            if (boolForUsername && boolForPasswords && boolForEmail && boolForCompanyNumber) {
                document.getElementById('valid').style.display = 'block';
            } else {
                document.getElementById('valid').style.display = 'none';
            }
        } else {
            document.getElementById('valid').style.display = 'none';
        }


    })
    let companyCheckBoxElement = document.getElementById('company');
    companyCheckBoxElement.addEventListener('change', (e) => {
        e.preventDefault();
        let companyInfoElement = document.getElementById('companyInfo');
        if (e.currentTarget.checked) {
            companyInfoElement.style.display = 'block';

        } else {
            companyInfoElement.style.display = 'none';
        }
    })
}