function solve() {

  let textElement = document.getElementById('text').value.split(' ');
  let namingTextElement = document.getElementById('naming-convention').value;
  let resultElement = document.getElementById('result');

  let newArr = [];
  textElement.forEach(element => {
    newArr.push(element.toLowerCase());
  });

  function CamelCase(array) {
    let resultArray = [];
    resultArray.push(array[0]);
    for (let index = 1; index < array.length; index++) {

      resultArray.push(array[index][0].toUpperCase() + array[index].substring(1, array[index].length));

    }
    return resultArray.join('');
  }
  function PascalCase(array) {
    let resultArray = [];
    for (let index = 0; index < array.length; index++) {

      resultArray.push(array[index][0].toUpperCase() + array[index].substring(1, array[index].length));

    }
    return resultArray.join('');
  }
  switch (namingTextElement) {
    case 'Camel Case':
      newArr = CamelCase(newArr);
      resultElement.textContent = newArr;
      break;
    case 'Pascal Case':
      newArr = PascalCase(newArr);
      resultElement.textContent = newArr;
      break;

    default:
      resultElement.textContent = "Error!";
      break;
  }

}