let suits = ['❤', '⬥', '♣', '♠'];
let names = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let deck = [];


var makeCards = function(suits, names, values) {
  $.each(suits, function(i, cardSuit) {
    $.each(values, function(e, cardVal) {
      let card = {};
      card.suit = suits[i];
      card.name = names[e];
      card.value = values[e];
      deck.push(card);
    });
    return deck
  });
}
makeCards(suits, names, values);
console.log(deck)




// Prototype method

// Array.prototype.shuffle = function() {
//   let input = this;

//   for (let i = input.length-1; i>=0; i--) {
//     let randomIndex = Math.floor(Math.random() * (i+1));
//     let itemAtIndex = input[randomIndex];

//     input[randomIndex] = input[i];
//     input[i] = itemAtIndex;
//   }
//   return input
// }

// deck.shuffle();
// console.log(deck)










// randomize method

// let randomize = function(a, b) {
//   return Math.random() - .5;
// }
// deck.sort(randomize);





// Fishr Yates Method

// let shuffleDeck = function(array) {
//   var count = array.length, randomIndex, temp;
//   while(count) {
//     randomIndex = Math.random() * count-- | 0;
//     temp = array[count];
//     array[count] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
// }

// shuffleDeck(deck);
// console.log(deck);
















