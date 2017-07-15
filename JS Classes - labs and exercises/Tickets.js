function tickets(inputArray, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination,
            this.price = price,
            this.status = status
        }
    }

    let allTickets = [];
    for(let x of inputArray) {
        let currentRow = x.split('|');
        let currentTicket = new Ticket(
            currentRow[0], 
            Number(currentRow[1]),
            currentRow[2]);
        allTickets.push(currentTicket);
    }

    let sortedTckets;
    switch (criteria){
        case "destination":
            sortedTckets = allTickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case "price":
            sortedTckets = allTickets.sort((a, b) => a.price - b.price);
            break;
        case "status":
            sortedTckets = allTickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return sortedTckets; 
}

tickets(['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'
);