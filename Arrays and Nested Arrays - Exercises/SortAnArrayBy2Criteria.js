function sortingByTwoCriteria(input) {

    input.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length);

    input.forEach(element => console.log(element));
}
sortingByTwoCriteria(['alpha',
    'beta',
    'gamma']
);