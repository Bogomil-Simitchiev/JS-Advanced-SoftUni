function printDeckOfCards(cards) {

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
                throw new Error(`Invalid card: ${face}${suit}`);
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
                throw new Error(`Invalid card: ${face}${suit}`);

        }

        return card;

    }
    let allCards = [];

    try {
        for (let currentInfo of cards) {
            if (currentInfo.length == 3) {
                let faceForTheObject = currentInfo[0] + currentInfo[1];
                let suitForTheObject = currentInfo[2];
                let currentCard = solve(faceForTheObject, suitForTheObject);
                allCards.push(currentCard);

            } else {
                let faceForTheObject = currentInfo[0];
                let suitForTheObject = currentInfo[1];
                let currentCard = solve(faceForTheObject, suitForTheObject);
                allCards.push(currentCard);

            }
        }
        console.log(allCards.join(' '));

    } catch (error) {
        console.log(error.message);

    }
}
printDeckOfCards(['5S', '3D', 'QD', '2C']);
