function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //   TODO:
      let elements = document.querySelectorAll('tbody tr');
      let inputElement = document.getElementById('searchField');

      for (const element of elements) {
         if (element.textContent.includes(inputElement.value) && inputElement.value != '') {
            element.className = 'select';
         } else {
            element.classList.remove('select');
         }
      }
      inputElement.value = '';

   }
}