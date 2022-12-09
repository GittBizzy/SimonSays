'use strict'

// Global Variables
let userScore = 0;
let round = 0;
let colorsArray = [];
let gamePlay = [];
let userPlay = [];

let red = new Color('red');
let blue = new Color('blue');
let yellow = new Color('yellow');
let green = new Color('green');
let purple = new Color('purple');
let white = new Color('white');
let orange = new Color('orange');
let pink = new Color(`pink`);

// Constructor to create color objects
function Color(name){
  this.name = name;
  colorsArray.push(this);
}

// Maybe player object, maybe not to store score and entered name

// Colors Array Easy
let easyMode = [red, blue, yellow, green];
console.log(`Easy mode`,easyMode);

// Colors Array Medium
let mediumMode = [red, blue, yellow, green, purple, orange];
console.log(`Medium mode`,mediumMode);

// Colors Array Hard
let hardMode = colorsArray;
console.log(`Hard mode `,hardMode);

// get random index for our color selector
function getRandomIndex() {
  return Math.floor(Math.random() * colorsArray.length);
}

// condition for game
while(gamePlay === userPlay){

}

// for( let i = 0; i <40; i++){
// console.log(getRandomIndex());
// }

// On Page Load, resume game/load player scores(Local Storage)

// Instantiating Local Storage so that functions are still working with constructor objects.

// Game Start Function, event handler, increment round.
// Play Button, event handler(starts game), event listener-user click

// to test build for loop with prompt to get user's entry for color clicks against generated array.

// difficulty selector, event handler, else-if statement

//Win Lose function, else if statement
// if gamePlay != userPlay then game over otherwise increment score


// DOM Manipulation to display player scores in comparison with preset players. insert from chartjs

//DOM manipulation for leaderboard scores

// look into how to manipulate css with js