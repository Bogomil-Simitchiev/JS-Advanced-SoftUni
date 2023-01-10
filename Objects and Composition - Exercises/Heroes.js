function solve() {

    let hero = {

        mage(nameOfMage) {

            hero.name = nameOfMage;
            hero.health = 100;
            hero.mana = 100;
            hero.cast = function (spell) {

                this.mana--;
                console.log(`${this.name} cast ${spell}`);
            }
            return hero;

        },
        fighter(nameOfFighter) {

            hero.name = nameOfFighter;
            hero.health = 100;
            hero.stamina = 100;
            hero.fight = function () {

                this.stamina--;
                console.log(`${this.name} slashes at the foe!`);
            }
            return hero;

        }

    }


    return hero;
}
let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
