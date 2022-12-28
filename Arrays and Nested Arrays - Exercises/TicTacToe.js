function tictactoe(input) {

    let field = [];
    let hasWinner = true;

    for (let i = 0; i < 3; i++) {
        field[i] = [];
        field[i].push(false);
        field[i].push(false);
        field[i].push(false);
    }

    function printField() {
        field.forEach(row => console.log(row.join("\t")));
    }

    let setOfPlayer = 0;

    while (true) {

        if ((field[0][0] != false && field[0][1] != false && field[0][2] != false) && (field[1][0] != false && field[1][1] != false && field[1][2] != false) && (field[2][0] != false && field[2][1] != false && field[2][2] != false)) {
            break;
        }

        let cordinates = input.shift().split(' ');
        let row = Number(cordinates[0]);
        let col = Number(cordinates[1]);

        if (setOfPlayer % 2 == 0) {

            if (field[row][col] == false) {
                field[row][col] = 'X';

            } else {
                console.log("This place is already taken. Please choose another!");
                setOfPlayer--;
            }

        }
        else {
            if (field[row][col] == false) {
                field[row][col] = 'O';

            } else {
                console.log("This place is already taken. Please choose another!");
                setOfPlayer--;
            }
        }

        setOfPlayer++;

        if (field[0][0] == 'X' && field[0][1] == 'X' && field[0][2] == 'X') {

            console.log("Player X wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[1][0] == 'X' && field[1][1] == 'X' && field[1][2] == 'X') {

            console.log("Player X wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[2][0] == 'X' && field[2][1] == 'X' && field[2][2] == 'X') {

            console.log("Player X wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][0] == 'X' && field[1][0] == 'X' && field[2][0] == 'X') {

            console.log("Player X wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][1] == 'X' && field[1][1] == 'X' && field[2][1] == 'X') {

            console.log("Player X wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][2] == 'X' && field[1][2] == 'X' && field[2][2] == 'X') {

            console.log("Player X wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][0] == 'X' && field[1][1] == 'X' && field[2][2] == 'X') {

            console.log("Player X wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][2] == 'X' && field[1][1] == 'X' && field[2][0] == 'X') {

            console.log("Player X wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][0] == 'O' && field[0][1] == 'O' && field[0][2] == 'O') {

            console.log("Player O wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[1][0] == 'O' && field[1][1] == 'O' && field[1][2] == 'O') {

            console.log("Player O wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[2][0] == 'O' && field[2][1] == 'O' && field[2][2] == 'O') {

            console.log("Player O wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][0] == 'O' && field[1][0] == 'O' && field[2][0] == 'O') {

            console.log("Player O wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][1] == 'O' && field[1][1] == 'O' && field[2][1] == 'O') {

            console.log("Player O wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][2] == 'O' && field[1][2] == 'O' && field[2][2] == 'O') {

            console.log("Player O wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][0] === 'O' && field[1][1] === 'O' && field[2][2] === 'O') {

            console.log("Player O wins!");
            printField();
            hasWinner = false;
            break;

        }
        if (field[0][2] == 'O' && field[1][1] == 'O' && field[2][0] == 'O') {

            console.log("Player O wins!");
            printField();
            hasWinner = false;
            break;

        }

        // first is X
        // second is O

    }
    if (hasWinner) {
        console.log("The game ended! Nobody wins :(");
        printField();
    }

}
tictactoe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);