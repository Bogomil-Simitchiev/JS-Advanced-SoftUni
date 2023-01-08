function heroicInventory(input) {

    let heroes = [];

    for (const line of input) {

        [nameHero, level, items] = line.split(' / ');

        items = items ? items.split(', ') : [];
        level = Number(level);

        let hero = {
            name: nameHero,
            level,
            items,
        };


        heroes.push(hero);
    }

    console.log(JSON.stringify(heroes));

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / ',
    'Hes / 1 / Desolator, Sentinel, Antara']
);