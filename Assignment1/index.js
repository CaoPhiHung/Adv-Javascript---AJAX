//declare buttons
var dealBtn = document.getElementById('dealBtn');
var resultBtn = document.getElementById('resultBtn');
var scoreBtn = document.getElementById('scoreBtn');

//declare html element
var result = document.getElementById('result');
var Computercards = document.getElementById('Computercards');
var Playercards = document.getElementById('Playercards');

//declare variables
var computerPoint = 0; 
var playerPoint = 0;
var computerWin = 0;
var playerWin = 0;
var totalGame = 0;

var playerHand, computerHand = new Array();

function deal(){
  resetDisplay();
  var cards = initCards();
  shuffle(cards);
  // console.log("Deal for player 1");
  playerHand = drawCards(cards);
  // console.log(playerHand);
  // console.log("Deal for computer");
  computerHand = drawCards(cards);
  console.log(computerHand);
  result.innerHTML += '<br /> <b>Cards are dealt</b>'; 
  totalGame++;
}

function show(){
  resetDisplay();
  showCards();
  showResult();
}

function showCards(){
  //show computer hand
  Computercards.innerHTML = "<br/> <strong> Computer Hand </strong> : <br/> <ul>";
  for(var i = 0; i < computerHand.length; i++){
    Computercards.innerHTML += '<li> Weight: ' + computerHand[i].weight + ' - Suit: ' + computerHand[i].suit + '</li>';
    console.log(computerPoint);
    computerPoint +=  computerHand[i].weight;

  }
  Computercards.innerHTML += '</ul>';

  //show player hand
  Playercards.innerHTML = "<br/> <strong> Player Hand </strong> : <br/> <ul>";
  for(var i = 0; i < playerHand.length; i++){
    Playercards.innerHTML += '<li> Weight: ' + playerHand[i].weight + ' - Suit: ' + playerHand[i].suit + '</li>';
    playerPoint +=  playerHand[i].weight; 
  }
  Playercards.innerHTML += '</ul>';

  
}

function showResult(){
  result.innerHTML = '<br/><b> Player 1 Point: ' + playerPoint + '</b><br/>' 
                    + '<b> Computer Point: '+ computerPoint+ '</b>';

  if(computerPoint >= playerPoint){
    result.innerHTML += '<br /> <b>Result: Computer Win</b>'; 
    computerWin += (computerWin + playerWin) < totalGame ? 1 : 0;
  }else{
    result.innerHTML += '<br /> <b>Result: Player Win</b>';
    playerWin += (computerWin + playerWin) < totalGame ? 1 : 0; 
  }
}

function score(){
  resetDisplay();
  result.innerHTML ='<br/><b>Total Game: ' + totalGame + '</b>'
                    + '<br/><b>Player Win ' + playerWin + ' - Computer Win: ' + computerWin + '</b>';
}

function initCards(){
  var cards = new Array();
  for(var suit =0; suit< 4; suit++){
    for(var weight = 2; weight < 15; weight++){
      var card_suit = '';
      switch(suit){
        case 1:
        card_suit = 'Hearts';
        break;
        case 2:
        card_suit = 'Diamonds';
        break;
        case 3:
        card_suit = 'Clubs';
        break;
        default:
        card_suit = 'Spades';
        break;
      }
      cards.push({suit: card_suit, weight: weight });
    }
  }
  return cards;
}

function drawCards(array){
  var cards = new Array(); 
  for(var i = 0 ; i < 3; i++){
    cards.push(array.shift());
  }
  return cards;
}

function resetDisplay(){
  Playercards.innerHTML ='';
  Computercards.innerHTML ='';
  result.innerHTML ='';
  playerPoint = 0;
  computerPoint = 0;
} 

function shuffle(array) {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

