'use strict'

// Global Variables
let playerName = '';
let userScore = 0;
let flash = 0;
let round = 0;
let colorsArray = [];
let gamePlay = [];//computers array for game
let userPlay = [];//players array for game
let compTurn = false; // boolean for computer's turn
let win = false; // boolean for win/lose
let on = false; //on/off switch is for running sections of code
let playable = true; // is good to play
let sound = true; // boolean for color light up sound
let intervalId = 0;
let powerOn = false;

const scoreBoard = document.getElementById('playerScore');
const playButton = document.querySelector("#play");
const onButton = document.querySelector('#onButton');
const roundCounter = document.querySelector('#round');

const greenColor = document.getElementById('green');
const redColor = document.getElementById('red');
const yellowColor = document.getElementById('yellow');
const blueColor = document.getElementById('blue');

// extra colors (to be worked on in future)
const purpleColor = 0;
const whiteColor = 0;
const pinkColor = 0;
const orangeColor = 0;


// Easy Mode colors
const red = new Color('darkred');
const blue = new Color('darkblue');
const yellow = new Color('goldenrod');
const green = new Color('darkgreen');

// Medium Mode colors
const purple = new Color('purple');
const white = new Color('white');

// Hard Mode colors
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
// console.log(`Easy mode`, easyMode);

// Colors Array Medium
let mediumMode = [red, blue, yellow, green, purple, orange];
// console.log(`Medium mode`, mediumMode);

// Colors Array Hard
let hardMode = colorsArray;
// console.log(`Hard mode `, hardMode);

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
  if (on && playable) {
    // console.log(`I'm Alive!!!`);
    playGame();
  }
}

function handlePowerButton (event) {
  powerOn = !powerOn;
  if (powerOn) {
    on = true
    console.log('button pressed', on);
    powerOn.classList("on")
  } else {
    on = false
    baseColor();
    clearInterval(intervalId);
    console.log('button unpressed', on);
  }
}

//play game function
function playGame() {
  win = false;
  userScore = 0;
  flash = 0;
  round = 1;
  gamePlay = [];
  userPlay = [];
  intervalId = 0;
  playable = true;
  easyPush();
  console.log(gamePlay);
  compTurn = true;

  // game intervals through each color generated in array during computers turn
  intervalId = setInterval(computerTurn, 800);
}


// This is for when the computer is running it's turn in the round
function computerTurn() {
  on = false
  // if it's the computers turn. run this code
  
  // if statement that compares flash to round, if they match the clears the computer turn and switches to player turn
  if (flash == round) {
    clearInterval(intervalId);
    compTurn = false;
    baseColor();
    on = true;
  }
  
  if (compTurn) {
    baseColor();
    setTimeout(() => {
      if (gamePlay[flash] == 0) greenTile();
      // console.log(flash);
      if (gamePlay[flash] == 1) redTile();
      // console.log(flash);
      if (gamePlay[flash] == 2) yellowTile();
      // console.log(flash);
      if (gamePlay[flash] == 3) blueTile();
      // console.log(flash);
      flash++;
    }, 200);
  }
  
}

function greenTile() {
  if (sound) {
    let audio = document.getElementById('sound1');
    // audio.play();
  }
  sound = true;
  greenColor.style.backgroundColor = 'lightgreen';
}

function redTile() {
  if (sound) {
    let audio = document.getElementById('sound2');
    // audio.play();
  }
  sound = true;
  redColor.style.backgroundColor = 'tomato';
}

function yellowTile() {
  if (sound) {
    let audio = document.getElementById('sound3');
    // audio.play();
  }
  sound = true;
  yellowColor.style.backgroundColor = 'yellow';
}

function blueTile() {
  if (sound) {
    let audio = document.getElementById('sound4');
    // audio.play();
  }
  sound = true;
  blueColor.style.backgroundColor = 'lightblue';
}


// This pushes all our easy mode numbers into the gameplay array.
function easyPush() {
  while (gamePlay.length < 100) {
    let placeHolder = getEasyIndex();
    gamePlay.push(placeHolder);
  }
}
// easyPush();
// console.log(gamePlay);

// Base Colors function
function baseColor() {
  greenColor.style.backgroundColor = green.name;
  redColor.style.backgroundColor = red.name;
  yellowColor.style.backgroundColor = yellow.name;
  blueColor.style.backgroundColor = blue.name;

}

// Color that the buttons will flash to when player selects wrong color in sequence
function flashColor(){
  greenColor.style.backgroundColor = "lightgreen";
  redColor.style.backgroundColor = "tomato";
  yellowColor.style.backgroundColor = "yellowgreen";
  blueColor.style.backgroundColor = "lightskyblue";
}

// event handler to track color selected by the player

function handleGreenSelected(event) {
  if (on) {
    userPlay.push(0);
    gameCheck();
    greenTile();
    if (!win) {
      setTimeout(() => {
        baseColor();
      }, 300);
    }
  }

}

function handleRedSelected(event) {
  if (on) {
    userPlay.push(1);
    gameCheck();
    redTile();
    if (!win) {
      setTimeout(() => {
        baseColor();
      }, 300);
    }
  }

}

function handleYellowSelected(event) {
  if (on) {
    userPlay.push(2);
    gameCheck();
    yellowTile();
    if (!win) {
      setTimeout(() => {
        baseColor();
      }, 300);
    }
  }

}

function handleBlueSelected(event) {
  if (on) {
    userPlay.push(3);
    gameCheck();
    blueTile();
    if (!win) {
      setTimeout(() => {
        baseColor();
      }, 300);
    }
  }

}

// function for game to check and compare gamePlay array vs userPlay array

function gameCheck () {
  if (userPlay[userPlay.length - 1] !== gamePlay[userPlay.length - 1]) {
    playable = false;
  }
  
  if (userPlay.length == 100 && playable) {
    winner();
  }

  if (!playable) {
    flashColor();
    if(!win) {
      alert('GAME OVER');
      askPlayerName();
    }
    setTimeout(() => {
      baseColor();
      playGame();
      // if (hardMode) after MVP
    }, 500);
    sound = false;
  }

  if (round == userPlay.length && playable && !win) {
    round++;
    if (round <= 5) {
      userScore += 10;
    } else if (round > 5 && round <= 10) {
      userScore += 30;
    } else if (round > 10 && round <= 20) {
      userScore += 50;
    } else {
      userScore += 100;
    }
    console.log(`Player Score: ${userScore}`);
    scoreBoard.innerHTML = userScore;
    userPlay = [];
    compTurn = true;
    flash = 0;
    intervalId = setInterval(computerTurn, 800);
  }
}

function winner() {
  flashColor();
  alert('WINNER!')
  askPlayerName();
  playable = false;
  win = true;
}

console.log('Player:', playerName);
console.log('Player Score', userScore);

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


//event listener for play button

playButton.addEventListener('click', handlePlayGame);
// changed this
onButton.addEventListener('click', handlePowerButton);
greenColor.addEventListener('click', handleGreenSelected);
redColor.addEventListener('click', handleRedSelected);
yellowColor.addEventListener('click', handleYellowSelected);
blueColor.addEventListener('click', handleBlueSelected);

// // Leaderboard table
// let playerNameAndHighScore = [];

// function Player (name, score) {
//   this.name = name;
//   this.score = score;
//   playerNameAndHighScore.push(this);
// }

// let playerOne = new Player ('Anthony', 999);

// console.log(playerNameAndHighScore);