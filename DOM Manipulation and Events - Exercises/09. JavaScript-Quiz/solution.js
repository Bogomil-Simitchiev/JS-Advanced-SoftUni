function solve() {
  //TODO...

  let rightAnswers = 0;
  let indexOfSection = 0;

  let answerWrapElements = document.querySelectorAll('.answer-wrap');
  for (let answerElement of answerWrapElements) {
    answerElement.addEventListener('click', (e) => {
      if (e.currentTarget.textContent.includes('onclick') || e.currentTarget.textContent.includes('JSON.stringify()') || e.currentTarget.textContent.includes('A programming API for HTML and XML documents')) {
        rightAnswers++;
      }
      let currentSection = document.querySelectorAll('section')[indexOfSection];
      currentSection.style.display = 'none';
      if (document.querySelectorAll('section')[indexOfSection + 1] !== undefined) {
        let nextSection = document.querySelectorAll("section")[indexOfSection + 1];
        nextSection.style.display = 'block';
        indexOfSection++;
      }
      else {
        document.querySelector("#results").style.display = 'block';
        if (rightAnswers !== 3) {
          document.querySelector("#results h1").innerHTML = `You have ${rightAnswers} right answers`;
        } else {
          document.querySelector("#results h1").innerHTML = "You are recognized as top JavaScript fan!";
        }
      }
    })
  }



}
