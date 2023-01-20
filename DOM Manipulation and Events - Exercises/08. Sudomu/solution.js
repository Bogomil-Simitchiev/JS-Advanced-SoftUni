function solve() {

    let checkButtonElement = document.querySelectorAll('button')[0];
    let clearButtonElement = document.querySelectorAll('button')[1];
    let inputElements = document.querySelectorAll('input[type="number"]');

    checkButtonElement.addEventListener('click', () => {

        let zeroZeroNum = Number(inputElements[0].value);
        let zeroOneNum = Number(inputElements[1].value);
        let zeroTwoNum = Number(inputElements[2].value);


        let oneZeroNum = Number(inputElements[3].value);
        let oneOneNum = Number(inputElements[4].value);
        let oneTwoNum = Number(inputElements[5].value);

        let twoZeroNum = Number(inputElements[6].value);
        let twoOneNum = Number(inputElements[7].value);
        let twoTwoNum = Number(inputElements[8].value);

        let isSolved = false;
        if (zeroZeroNum !== '' && zeroOneNum !== '' && zeroTwoNum !== '' && oneZeroNum !== '' && oneOneNum !== '' && oneTwoNum !== '' && twoZeroNum !== '' && twoOneNum !== '' && twoTwoNum !== '') {

            if (zeroZeroNum != zeroOneNum && zeroZeroNum != zeroTwoNum && zeroOneNum != zeroTwoNum
                && oneZeroNum != oneOneNum && oneZeroNum != oneTwoNum && oneOneNum != oneTwoNum &&
                twoZeroNum != twoOneNum && twoZeroNum != twoTwoNum && twoOneNum != twoTwoNum &&
                zeroZeroNum != oneZeroNum && zeroZeroNum != twoZeroNum && oneZeroNum != twoZeroNum &&
                zeroOneNum != oneOneNum && zeroOneNum != twoOneNum && oneOneNum != twoOneNum &&
                zeroTwoNum != oneTwoNum && zeroTwoNum != twoTwoNum && oneTwoNum != twoTwoNum) {
                isSolved = true;
            } else {
                isSolved = false;
            }

            let resultElement = document.querySelector('#check p');
            let tableElement = document.querySelector('table');
            if (isSolved) {
                resultElement.textContent = "You solve it! Congratulations!";
                resultElement.style.color = 'green';
                tableElement.style.border = "2px solid green";


            } else {
                resultElement.textContent = "NOP! You are not done yet...";
                resultElement.style.color = 'red';
                tableElement.style.border = "2px solid red";
            }
        }

    })
    clearButtonElement.addEventListener('click', () => {
        let tableElement = document.querySelector('table');
        tableElement.style.border = "none";
        let resultElement = document.querySelector('#check p');
        resultElement.textContent = "";

        inputElements[0].value = '';
        inputElements[1].value = '';
        inputElements[2].value = '';
        inputElements[3].value = '';
        inputElements[4].value = '';
        inputElements[5].value = '';
        inputElements[6].value = '';
        inputElements[7].value = '';
        inputElements[8].value = '';

    })
}