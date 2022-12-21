function evenPositionElements(input) {

    input = input.filter((el, i) => i % 2 == 0);
    console.log(input.join(' '));
}
evenPositionElements(['20', '30', '40', '50', '60']);