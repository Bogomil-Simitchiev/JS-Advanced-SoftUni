function towns(input) {

    function removeZero(number) {
        let curr = Number(number).toFixed(2);
        let result = Number(curr);
        return result;
    }

    let townsArr = [];

    for (let index = 1; index < input.length; index++) {
        let info = input[index].split('|').map(x => x.trim()).filter(x => x != '');
        let Town = info[0];
        let Latitude = removeZero(info[1]);
        let Longitude = removeZero(info[2]);
        let currentTown = {
            Town,
            Latitude,
            Longitude
        }
        townsArr.push(currentTown);
    }

    console.log(JSON.stringify(townsArr));

}
towns(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);
towns(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']
);