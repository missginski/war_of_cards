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


// randomize with .sort()
// http://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize
let shuffle = function(a, b) {
  return Math.random() - .5;
}
deck.sort(shuffle);



let stack1 = [];
let stack2 = [];

let dealWar = function(deck) {
  $.map(deck, function(card, i) {
    if (i > deck.length/2) {
      stack1.push(card);
    } else {
      stack2.push(card)
    }
    return stack1;
    return stack2;
});
}

dealWar(deck);

console.log(stack1);
console.log(stack2);


let play = function(stack1, stack2)




















