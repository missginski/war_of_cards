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
    })
  })
};

// randomize with .sort()
// http://stackoverflow.com/questions/3718282/javascript-shuffling-objects-inside-an-object-randomize
let shuffle = function(a, b) {
  return Math.random() - .5;
};

let stack1 = [];
let stack2 = [];
let dealWar = function(deck) {
  $.map(deck, function(card, i) {
    if (i >= deck.length/2) {
      stack1.push(card);
    }
    else {
      stack2.push(card);
    }
  })
};

let play = function(stack1, stack2) {
  let card1 = stack1.shift();
  let card2 = stack2.shift();

  if (card1.value > card2.value) {
    stack1.push(card1, card2);
  }
  else if (card1.value < card2.value) {
    stack2.push(card1, card2);
  }
  else {
    declareWar();
  }

  if (stack1.length === 0) {
    let isWinner = stack2;
    $('h1').text(`You lose... Sorry`);
  }
  else {
    isWinner = stack1;
    $('h1').text(`You win! Hooraaay!!`);
  }

};

// let  declareWar = function() {
//   $('h1').text('Time to Battle!');
//   let warStack1 = stack1.splice(0, 4);
//   let warStack2 = stack2.splice(0, 4);

//   if (warStack1[3] > warStack2[3]) {
//     $.each(warStack1, function(i) {
//       if (warStack1.length > 0) {
//        stack1.push(warStack1[i]);
//       }
//       if (warStack2.length >0) {
//         stack1.push(warStack2[i]);
//       }
//       console.log(stack1[3], stack2[3], warStack1, warStack2, stack1, stack2)
//     });

//   }
// };








/******************************
DOM Stuff
******************************/


/***** Start Page *****/
let table = $('div.game_table');

let startDeck = $('<div class="card stack back start_deck">');
let startButton = $('<button class="start_button">');
startButton.text(`Play!`);
table.append(startDeck);
table.append(startButton);


let startGame = function() {
  $('.start_button').remove();
  $('.start_deck').remove();
  $('h1').text('Card Battle');


  let pOne = $('<div class="card stack back pOne ps">');
  let pTwo = $('<div class="card stack back pTwo ps">');
  let drawButton = $('<button class="draw_button">');
  drawButton.text('Draw!');
  table.append(pOne);
  table.append(pTwo);
  table.append(drawButton);


  makeCards(suits, names, values);
  deck.sort(shuffle);
  dealWar(deck);
}


let playGame = function() {

}
































let addEventListeners = function() {
  // I realize only now that i couldve made this one button, but it's late and i want to go to bed

  $('.start_button').click(function() {
    startGame();
  })

  $('.draw_button').click(function() {
    playGame();
    console.log(stack1[0], stack2[0], stack1.length, stack2.length)
  })






}
addEventListeners();





