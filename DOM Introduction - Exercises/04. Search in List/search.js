function search() {

   let townsElements = document.getElementsByTagName('li');
   let inputElement = document.getElementById('searchText');
   let resultElement = document.getElementById('result');

   let countOfElements = 0;

   for (let element of townsElements) {
      if (element.textContent.includes(inputElement.value)) {

         element.style.textDecoration = "underline";
         element.style.fontWeight = "bold";
         countOfElements++;

      } else {

         element.style.textDecoration = "none";
         element.style.fontWeight = "normal";

      }
   }
   resultElement.textContent = `${countOfElements} matches found`;
   inputElement.value = "";

}
