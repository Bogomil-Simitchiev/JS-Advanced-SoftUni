function solve() {

    let buttonOnScreen = document.querySelectorAll('#container button')[0];

    buttonOnScreen.addEventListener('click', (e) => {
        e.preventDefault();
        let inputElements = document.querySelectorAll('#container input');
        let nameInputElement = inputElements[0];
        let hallInputElement = inputElements[1];
        let ticketPriceInputElement = inputElements[2];

        let currentPrice = '';
        let currentName = '';

        let number = Number(ticketPriceInputElement.value);
        if (nameInputElement.value !== '' && hallInputElement.value !== '' && isNaN(number) == false && ticketPriceInputElement.value !== '') {

            let ulInSectionElement = document.querySelector('#movies ul');
            let liElement = document.createElement('li');
            currentPrice = ticketPriceInputElement.value;
            currentName = nameInputElement.value;

            let spanElement = document.createElement('span');
            spanElement.textContent = nameInputElement.value;
            liElement.appendChild(spanElement);

            let strongElement = document.createElement('strong');
            strongElement.textContent = 'Hall: ' + hallInputElement.value;
            liElement.appendChild(strongElement);

            let divElement = document.createElement('div');

            let strongElementForPrice = document.createElement('strong');
            strongElementForPrice.textContent = Number(ticketPriceInputElement.value).toFixed(2);
            divElement.appendChild(strongElementForPrice);

            let inputElement = document.createElement('input');
            inputElement.placeholder = "Tickets Sold";
            divElement.appendChild(inputElement);

            let buttonElement = document.createElement('button');
            buttonElement.textContent = 'Archive';
            buttonElement.addEventListener('click', (event) => {

                let inputElementInTheDiv = event.currentTarget.parentNode.querySelector('input');
                if (isNaN(inputElementInTheDiv.value) == false && inputElementInTheDiv.value !== '') {

                    let totalPrice = Number(inputElementInTheDiv.value) * Number(currentPrice);
                    let ulInSectionElementArchive = document.querySelector('#archive ul');
                    let liElementForTheArchiveSection = document.createElement('li');

                    let finalSpanElement = document.createElement('span');
                    finalSpanElement.textContent = currentName;
                    liElementForTheArchiveSection.appendChild(finalSpanElement);

                    let totalAmountStrongElement = document.createElement('strong');
                    totalAmountStrongElement.textContent = 'Total amount: ' + totalPrice.toFixed(2);
                    liElementForTheArchiveSection.appendChild(totalAmountStrongElement);

                    let buttonDeleteElement = document.createElement('button');
                    buttonDeleteElement.textContent = 'Delete';
                    buttonDeleteElement.addEventListener('click', (el) => {
                        el.currentTarget.parentNode.remove();
                    })

                    liElementForTheArchiveSection.appendChild(buttonDeleteElement);
                    ulInSectionElementArchive.appendChild(liElementForTheArchiveSection);
                    liElement.remove();


                }
            })

            divElement.appendChild(buttonElement);
            liElement.appendChild(divElement);
            ulInSectionElement.appendChild(liElement);
            nameInputElement.value = '';
            hallInputElement.value = '';
            ticketPriceInputElement.value = '';

        }

    })

    let clearButtonElement = document.querySelector('#archive button');
    clearButtonElement.addEventListener('click', (e) => {
        let liElements = e.currentTarget.parentNode.querySelectorAll('li');
        if (liElements.length > 0) {
            for (let liElement of liElements) {
                liElement.remove();
            }
        }

    })
}