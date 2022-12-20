function roadRadar(speed, place) {

    switch (place) {
        case 'motorway':

            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            }
            else {
                let difference = speed - 130;
                if (difference >= 0 && difference <= 20) {

                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - speeding`);
                } else if (difference >= 21 && difference <= 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - excessive speeding`);
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - reckless driving`);
                }

            }
            break;
        case 'interstate':
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            }
            else {
                let difference = speed - 90;
                if (difference >= 0 && difference <= 20) {

                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - speeding`);
                } else if (difference >= 21 && difference <= 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - excessive speeding`);
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - reckless driving`);
                }

            }
            break;
        case 'city':
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            }
            else {
                let difference = speed - 50;
                if (difference >= 0 && difference <= 20) {

                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - speeding`);
                } else if (difference >= 21 && difference <= 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - excessive speeding`);
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - reckless driving`);
                }

            }
            break;
        case 'residential':
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            }
            else {
                let difference = speed - 20;
                if (difference >= 0 && difference <= 20) {

                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - speeding`);
                } else if (difference >= 21 && difference <= 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - excessive speeding`);
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - reckless driving`);
                }

            }
            break;
    }
}
roadRadar(40, 'city');