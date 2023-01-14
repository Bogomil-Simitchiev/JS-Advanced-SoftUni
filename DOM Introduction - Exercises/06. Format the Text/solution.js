function solve() {
  //TODO:
  let outputElement = document.getElementById('output');
  let textAreaElement = document.getElementById('input');

  let splitTextFromTheInput = textAreaElement.value.split('.').filter(x => x != '');

  while (splitTextFromTheInput.length > 0) {
    let textParagraph = splitTextFromTheInput.splice(0, 3).join('.') + '.';
    let p = document.createElement('p');
    p.textContent = textParagraph;
    outputElement.appendChild(p);
  }

}