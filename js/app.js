'use strict'

// Global Variables
let userScore = 0;
let round = 0;
let colorsArray = [];
let gamePlay = [];//computers array for game
let userPlay = [];//players array for game
let win = false;
let on = false; //on/off switch is for running sections of code
let playable = true;

const playButton = document.querySelector("#play");

const greenColor = document.getElementById('green');
const redColor = document.getElementById('red');
const yellowColor = document.getElementById('yellow');
const blueColor = document.getElementById('blue');

// extra colors (to be worked on in future)
const purpleColor = 0;
const whiteColor = 0;
const pinkColor = 0;
const orangeColor = 0;



const red = new Color('red');
const blue = new Color('blue');
const yellow = new Color('yellow');
const green = new Color('green');
const purple = new Color('purple');
const white = new Color('white');
const orange = new Color('orange');
const pink = new Color(`pink`);


// DOM manipulating colors

greenColor.style.backgroundColor = green.name;
redColor.style.backgroundColor = red.name;
yellowColor.style.backgroundColor = yellow.name;
blueColor.style.backgroundColor = blue.name;


// Constructor to create color objects
function Color(name) {
  this.name = name;
  colorsArray.push(this);
}

// Maybe player object, maybe not to store score and entered name

// Colors Array Easy
let easyMode = [red, blue, yellow, green];
console.log(`Easy mode`, easyMode);

// Colors Array Medium
let mediumMode = [red, blue, yellow, green, purple, orange];
console.log(`Medium mode`, mediumMode);

// Colors Array Hard
let hardMode = colorsArray;
console.log(`Hard mode `, hardMode);

// get random index for our color selector
function getRandomIndex() {
  return Math.floor(Math.random() * colorsArray.length);
}

function getMediumIndex() {
  return Math.floor(Math.random() * colorsArray.length);
}

function getEasyIndex() {
  return Math.floor(Math.random() * 4);
}

// condition for game
while (gamePlay === userPlay) {

}

//#1 make play button, controller for on off switch get that one box to go through intervals of blinking

playButton.addEventListener(`click`, handlePlayGame);

// Event handler function to play the game
function handlePlayGame(event) {

  if (!win && playable) {
    playGame();
    // computerTurn();
    // userTurn();
  }
}


//play game function
function playGame() {
  win = false;
  flash = 0;
  round = 1;
  gamePlay = [];
  userPlay = [];
  easyPush();
  gameTurn = true;
  // playable = true;


  while (!win && playable) {
    for (let i = 0; i < 100; i++) {
      computerTurn();
      userTurn();
      gameOver();//This will make playable false
    }
  }
}

// This is for when the computer is running it's turn in the round
function computerTurn() {
  // if it's the computers turn. run this code
  if (!on) {
    if (flash == round) {
      // clear interval
      gameTurn = false;
      clearColor();
      on = true;
    }
  }
}

// This pushes all our easy mode numbers into the gameplay array.
function easyPush() {
  while (gamePlay.length < 100) {
    let placeHolder = getEasyIndex();
    gamePlay.push(placeHolder);
  }
}
easyPush();

// Base Colors function
function baseColor() {
  greenColor.style.backgroundColor = green.name;
  redColor.style.backgroundColor = red.name;
  yellowColor.style.backgroundColor = yellow.name;
  blueColor.style.backgroundColor = blue.name;

}

// Color that the buttons will flash to when selected
function flashColor(){
  greenColor.style.backgroundColor = "lightgreen";
  redColor.style.backgroundColor = "tomato";
  yellowColor.style.backgroundColor = "yellowgreen";
  blueColor.style.backgroundColor = "lightskyblue";
}



console.log(gamePlay);
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


// console.log graveyard

// Variable for difficulty then case switch for easy medium and hard


// function randomPush() {
//   while (gamePlay.length < 100) {
//     let placeHolder = getRandomIndex();
//     if (placeHolder < 4) {
//       gamePlay.push(placeHolder);
//     } else {
//       randomPush();
//     }
//   }
// }

// randomPush();
// console.log(gamePlay);