function manageDatabaseOfTickets(arrayOfStrings, sortCriterion) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let allTickets = [];

    for (let string of arrayOfStrings) {
        let splitInfoFromString = string.split('|');
        let destination = splitInfoFromString[0];
        let price = Number(splitInfoFromString[1]);
        let status = splitInfoFromString[2];

        let ticket = new Ticket(destination, price, status);
        allTickets.push(ticket);
    }

    switch (sortCriterion) {
        case 'destination':
            allTickets = allTickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            allTickets = allTickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            allTickets = allTickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }
    return allTickets;

}
console.log(manageDatabaseOfTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));