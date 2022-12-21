function pieceOfPie(array, startStr, endStr) {

    let startIndex = array.indexOf(startStr);
    let endIndex = array.indexOf(endStr);

    let pieces = [];
    for (let i = startIndex; i <= endIndex; i++) {
        let piece = array[i];
        pieces.push(piece);
    }
    return pieces;

}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);