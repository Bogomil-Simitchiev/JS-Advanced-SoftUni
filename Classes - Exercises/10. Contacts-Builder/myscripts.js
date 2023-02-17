class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;

    }
    get online() {
        return this._online
    }

    set online(v) {
        this._online = v;
        if (this.titleDivElement) {
            this.titleDivElement.className = this._online ? 'title online' : 'title'
        }
    }
    render(id) {
        let elementToPut = document.getElementById(id);
        this.articleElement = document.createElement('article');

        this.titleDivElement = document.createElement('div');
        this.titleDivElement.className = this._online ? 'title online' : 'title'
        this.buttonElement = document.createElement('button');
        this.titleDivElement.textContent = `${this.firstName} ${this.lastName}`;
        this.buttonElement.addEventListener('click', (e) => {
            let currentInfoDiv = e.currentTarget.parentNode.parentNode.querySelector('div .info');
            if (currentInfoDiv.style.display == 'none') {
                currentInfoDiv.style.display = 'block';
            } else {
                currentInfoDiv.style.display = 'none';
            }
        })
        this.buttonElement.textContent = 'i';
        this.titleDivElement.appendChild(this.buttonElement);

        this.infoDivElement = document.createElement('div');
        this.infoDivElement.classList.add('info');
        this.infoDivElement.style.display = 'none';
        this.spanPhoneElement = document.createElement('span');
        this.spanPhoneElement.innerHTML = `&phone; ${this.phone}`;
        this.spanEmailElement = document.createElement('span');
        this.spanEmailElement.innerHTML = `&#9993; ${this.email}`;
        this.infoDivElement.appendChild(this.spanPhoneElement);
        this.infoDivElement.appendChild(this.spanEmailElement);
        this.articleElement.appendChild(this.titleDivElement);
        this.articleElement.appendChild(this.infoDivElement);

        elementToPut.appendChild(this.articleElement);
    }
}