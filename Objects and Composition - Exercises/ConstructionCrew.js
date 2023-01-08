function worker(object) {

    if (object.dizziness) {

        let amount = object.weight * 0.1 * object.experience;
        object.levelOfHydrated += amount;
        object.dizziness = false;
    }
    return object;

}
console.log(worker({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));

console.log(worker({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));

console.log(worker({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}));