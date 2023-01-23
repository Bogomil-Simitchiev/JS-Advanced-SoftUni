function solve() {

    let addButtonElement = document.getElementById('add');

    addButtonElement.addEventListener('click', (e) => {

        e.preventDefault();
        let orangeSectionElement = document.querySelectorAll('section')[1];
        let divElementInSection = orangeSectionElement.querySelectorAll('div')[1];
        let articleElement = document.createElement('article');

        let taskElement = document.getElementById('task');
        let descriptionElement = document.getElementById('description');
        let dateElement = document.getElementById('date');

        if (taskElement.value != '' && descriptionElement.value != '' && dateElement.value != '') {
            let h3Element = document.createElement('h3');
            h3Element.textContent = taskElement.value;
            articleElement.appendChild(h3Element);

            let pElement = document.createElement('p');
            pElement.textContent = "Description: " + descriptionElement.value;
            articleElement.appendChild(pElement);

            let pElementDate = document.createElement('p');
            pElementDate.textContent = "Due Date: " + dateElement.value;
            articleElement.appendChild(pElementDate);

            let divEl = document.createElement('div');
            divEl.className = 'flex';
            let startButtonElement = document.createElement('button');
            startButtonElement.className = 'green';
            startButtonElement.textContent = "Start";
            startButtonElement.addEventListener('click', (event) => {
                let inProgressElement = document.getElementById('in-progress');
                let progressArticle = document.createElement('article');


                let progressH3element = document.createElement('h3');
                progressH3element.textContent = h3Element.textContent;
                progressArticle.appendChild(progressH3element);

                let pElementInProgress = document.createElement('p');
                pElementInProgress.textContent = pElement.textContent;
                progressArticle.appendChild(pElementInProgress);

                let pElementDateInProgress = document.createElement('p');
                pElementDateInProgress.textContent = pElementDate.textContent;
                progressArticle.appendChild(pElementDateInProgress);

                let divForInProgressElement = document.createElement('div');
                divForInProgressElement.className = 'flex';

                let deleteButton = document.createElement('button');
                deleteButton.className = 'red';
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener('click', () => {
                    progressArticle.remove();
                })
                divForInProgressElement.appendChild(deleteButton);
                let buttonFinish = document.createElement('button');
                buttonFinish.className = 'orange';
                buttonFinish.textContent = "Finish";
                buttonFinish.addEventListener('click', () => {
                    let completeSectionElement = document.querySelectorAll('section')[3];
                    let divElement = completeSectionElement.querySelectorAll('div')[1];

                    let finalArticleElement = document.createElement('article');

                    finalArticleElement.appendChild(progressH3element);
                    finalArticleElement.appendChild(pElementInProgress);
                    finalArticleElement.appendChild(pElementDateInProgress);
                    divElement.appendChild(finalArticleElement);

                    progressArticle.remove();
                })

                divForInProgressElement.appendChild(buttonFinish);

                progressArticle.appendChild(divForInProgressElement);



                inProgressElement.appendChild(progressArticle);
                event.currentTarget.parentNode.parentNode.remove();
            })

            divEl.appendChild(startButtonElement);
            let endButtonElement = document.createElement('button');
            endButtonElement.className = 'red';
            endButtonElement.textContent = "Delete";
            endButtonElement.addEventListener('click', (event) => {

                event.currentTarget.parentNode.parentNode.remove();
            })
            divEl.appendChild(endButtonElement);

            articleElement.appendChild(divEl);
            divElementInSection.appendChild(articleElement);
        }

    })


}