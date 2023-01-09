function rectangle(width, height, color) {

    function tranformFirstCharToUpper(word) {
        let otherHalfOfWord = word.slice(1);
        return word[0].toUpperCase() + otherHalfOfWord;
    }

    let rect = {
        width: Number(width),
        height: Number(height),
        color: tranformFirstCharToUpper(color),
        calcArea() {
            return this.width * this.height;
        }
    }
    return rect;

}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
