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
    if (i >= deck.length/2) {
      stack1.push(card);
    } else {
      stack2.push(card)
    }
    return stack1;
    return stack2;
});
}

// dealWar(deck)


let play = function(stack1, stack2) {
  let card1 = stack1.shift();
  let card2 = stack2.shift();

  if (card1.value > card2.value) {
    stack1.push(card1, card2);
  }
  else {
    stack2.push(card1, card2);
  }
}
// play(stack1, stack2);





/******************************
DOM Stuff
******************************/

let table = $('section.table');

// let deck = $('<div class="card stack back">')

let pOneStack = $('<div class="card stack back">');
let pTwoStack = $('<div class="card stack back"');


table.append(pOneStack);

let
























