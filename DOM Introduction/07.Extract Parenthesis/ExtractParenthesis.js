function extract(content) {

    //The Rose Valley (Bulgaria) is located just south of the Balkan Mountains (Kazanlak).The most common oil-bearing rose found in the valley is the pink-petaled Damask rose (Rosa damascena Mill). 
    let pElement = document.getElementById(content);

    let pattern = /\([^(]+\)/g;
    let matches = pElement.textContent.matchAll(pattern);

    function getWordWithoutBrackets(word) {
        let result = '';
        for (let index = 1; index < word.length - 1; index++) {
            result += word[index];
        }
        return result;
    }
    let words = [];

    for (const match of matches) {
        words.push(getWordWithoutBrackets(match[0]));
    }
    return words.join('; ');

}