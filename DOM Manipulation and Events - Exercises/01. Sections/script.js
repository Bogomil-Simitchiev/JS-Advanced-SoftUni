function create(words) {

   let divElements = [];
   for (let word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.textContent = word;
      pElement.style.display = 'none';

      divElement.appendChild(pElement);
      divElements.push(divElement);

   }
   let divContentElement = document.getElementById('content');
   for (let divEl of divElements) {
      divEl.addEventListener('click', function (e) {
         e.currentTarget.querySelector('p').style.display = '';

      })

      divContentElement.appendChild(divEl);
   }

}