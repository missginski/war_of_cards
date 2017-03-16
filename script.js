let suits = ['❤', '⬥', '♣', '♠'];
let names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
// let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']


let deck = [];

suits.forEach( function(cardSuit, i) {
  names.forEach( function(cardName, x) {
    // values.forEach( function(cardValue, e) {
      let card = {};
      card.suit = suits[i];
      card.name = names[x];
      // card.value = values[e];

      deck.push(card);
    })
  })
// })

console.log(deck);








