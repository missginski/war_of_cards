console.log('running...');

let card = function(name, value, suit) {
  this.name = name;
  this.value = value;
  this.suit = suit;
}

let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

let deck = [];

// function makeCards() {
//   values.Map(foreach (suits , index) {
//     deck.push()
//   })
// }

values.forEach( function(value, i) {
  suits.forEach( function(suit, i){
    console.log( values[i], suits[i]);

  })
})

