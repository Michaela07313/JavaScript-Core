function printDeckOfCards(inputArray){
    let result = [];

    for(let card of inputArray) {
        let face = card.substring(0, card.length-1);
        let suit = card.substr(card.length-1, 1);

        try {
            result.push(makeCard(face, suit));
        }
        catch (err) {
            console.log("Invalid card: " + card);
            return;
        }
    }

    console.log(result.join(' '));

    function makeCard(face, suit) {
        const validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if(!validFaces.includes(face)) {
            throw new Error("Invalid card face: " + face);
        }
        if(!validSuits.includes(suit)) {
            throw new Error("Invalid card suits: " + suit);
        }

        let cardObject = {
            face: face,
            suit: suit,
            toString: function() { 
                let suitToChar = {
                    'S': "\u2660", // ♠
                    'H': "\u2665", // ♥
                    'D': "\u2666", // ♦
                    'C': "\u2663", // ♣
                };

                return `${this.face}${suitToChar[this.suit]}`;
            }
        };
        
        return cardObject.toString();
    }

}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
//console.log('' + makeCard('1', 'H'));