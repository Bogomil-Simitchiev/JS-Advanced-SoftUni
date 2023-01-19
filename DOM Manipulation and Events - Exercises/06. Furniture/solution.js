function solve() {

  //TODO...
  let generateTextAreaElement = document.querySelectorAll('textarea')[0];
  let buttonGenerateElement = document.querySelectorAll('button')[0];
  buttonGenerateElement.addEventListener('click', () => {
    let jsonObjects = JSON.parse(generateTextAreaElement.value);
    for (let object of jsonObjects) {

      let tbodyElement = document.querySelector('tbody');

      //create rows for the table with the current info from the object

      let rowElement = document.createElement('tr');
      let tdElementForImg = document.createElement('td');
      let imgElement = document.createElement('img');
      imgElement.src = object.img;
      tdElementForImg.appendChild(imgElement);
      rowElement.appendChild(tdElementForImg);

      let tdElementForName = document.createElement('td');
      let pElement = document.createElement('p');
      pElement.textContent = object.name;
      tdElementForName.appendChild(pElement);
      rowElement.appendChild(tdElementForName);

      let tdElementForPrice = document.createElement('td');
      let pElementForPrice = document.createElement('p');
      pElementForPrice.textContent = object.price;
      tdElementForPrice.appendChild(pElementForPrice);
      rowElement.appendChild(tdElementForPrice);

      let tdElementForFactor = document.createElement('td');
      let pElementForFactor = document.createElement('p');
      pElementForFactor.textContent = object.decFactor;
      tdElementForFactor.appendChild(pElementForFactor);
      rowElement.appendChild(tdElementForFactor);

      let tdElementForInput = document.createElement('td');
      let inputElement = document.createElement('input');
      inputElement.type = "checkbox";
      tdElementForInput.appendChild(inputElement);
      rowElement.appendChild(tdElementForInput);


      tbodyElement.appendChild(rowElement);
      //append rows to the tbody element
    }
  })
  let buyButtonElement = document.querySelectorAll('button')[1];
  let furnitureList = [];
  let price = 0;
  let factor = 0;
  buyButtonElement.addEventListener('click', () => {
    let checkboxElements = document.querySelectorAll('tbody tr td input[type="checkbox"]');
    for (const checkboxElement of checkboxElements) {
      if (checkboxElement.checked) {

        let pElements = checkboxElement.parentNode.parentNode.querySelectorAll('td p');
        furnitureList.push(pElements[0].textContent);
        price += Number(pElements[1].textContent);
        factor += Number(pElements[2].textContent);

      }
    }
    let buyTextareaElement = document.querySelectorAll('textarea')[1];
    let textForFurniture = `Bought furniture: ${furnitureList.join(', ')}\n`;
    let textForPrice = `Total price: ${price.toFixed(2)}\n`;
    factor /= furnitureList.length;
    let textForFactor = `Average decoration factor: ${factor}`;
    buyTextareaElement.value += textForFurniture;
    buyTextareaElement.value += textForPrice;
    buyTextareaElement.value += textForFactor;


  })

}