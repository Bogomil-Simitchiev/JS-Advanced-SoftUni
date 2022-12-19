function previousDay(year, month, day) {
    let currentDay = `${year}-${month}-${day}`;
    let date = new Date(currentDay);
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

}
previousDay(2016, 9, 30);
