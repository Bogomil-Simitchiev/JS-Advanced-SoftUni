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
                console.log(`Invalid card: ${face}${suit}`);
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
                console.log(`Invalid card: ${face}${suit}`);
                break;
        }

        return card;

    }
    let allCards = [];
    let errorBoolean = false;
    for (let currentInfo of cards) {
        if (currentInfo.length == 3) {
            let faceForTheObject = currentInfo[0] + currentInfo[1];
            let suitForTheObject = currentInfo[2];

            let currentCard = solve(faceForTheObject, suitForTheObject);
            if (currentCard.face == undefined || currentCard.suit == undefined) {
                errorBoolean = true;
            }
            allCards.push(currentCard);

        } else {
            let faceForTheObject = currentInfo[0];
            let suitForTheObject = currentInfo[1];
            let currentCard = solve(faceForTheObject, suitForTheObject);
            if (currentCard.face == undefined || currentCard.suit == undefined) {
                errorBoolean = true;
            }
            allCards.push(currentCard);

        }
    }
    if (errorBoolean == false) {
        console.log(allCards.join(' '));
    }


}
printDeckOfCards(['5S', '3D', 'QD', '2C']);
