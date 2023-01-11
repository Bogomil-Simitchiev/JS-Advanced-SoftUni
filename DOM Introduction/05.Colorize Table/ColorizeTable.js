function colorize() {
    // TODO

    let trElements = document.getElementsByTagName('tr');

    for (let index = 1; index < trElements.length; index++) {

        if (index % 2 == 1) {

            trElements[index].style.backgroundColor = "teal";
        }

    }
}