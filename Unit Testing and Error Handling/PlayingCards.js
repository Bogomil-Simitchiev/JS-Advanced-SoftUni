function solve(face, suit) {

    class Card {
        constructor(currentFace, currentSuit) {
            this.face = currentFace;
            this.suit = currentSuit;
        }
        toString() {
            return this.face + this.suit;
        }

    }
    let card = new Card();

    function checkTheFaceOfTheCard(currentFace) {
        if (currentFace == '2' || currentFace == '3' || currentFace == '4' || currentFace == '5' || currentFace == '6' || currentFace == '7' || currentFace == '8' ||
            currentFace == '9' || currentFace == '10' || currentFace.toUpperCase() == 'J' || currentFace.toUpperCase() == 'Q' || currentFace.toUpperCase() == 'K' || currentFace.toUpperCase() == 'A') {
            card.face = currentFace.toUpperCase();
        } else {
            throw new Error(Error);
        }
    }
    switch (suit) {
        case 'S':
            checkTheFaceOfTheCard(face);
            card.suit = '\u2660';

            break;
        case 'H':
            checkTheFaceOfTheCard(face);
            card.suit = '\u2665';

            break;
        case 'D':
            checkTheFaceOfTheCard(face);
            card.suit = '\u2666';

            break;

        case 'C':
            checkTheFaceOfTheCard(face);
            card.suit = '\u2663';
            break;
        default:
            throw new Error(Error);
    }

    return card;

}
console.log(solve('A', 'S')); 