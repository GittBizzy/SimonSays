'use strict'

console.log('Hello, world');

// Leaderboard table
let playerNameAndHighScore = [];

function Player (name, score) {
  this.name = name;
  this.score = score;
  playerNameAndHighScore.push(this);
}

// let playerOne = new Player ('Anthony', 999);
// let playerTwo = new Player ('Nick', 998);
// let playerThree = new Player ('Paula', 997);
// let playerFour = new Player ('Jennifer', 996);
// let playerFive = new Player ('Peter', 995);

if (localStorage.getItem('player')) {
  let loadedPlayer = localStorage.getItem('player');
  playerNameAndHighScore = JSON.parse(loadedPlayer);
}


console.log(playerNameAndHighScore);

function renderPlayerScore () {
    let tableOne = document.getElementById('easyTable');
    if(tableOne) {

      for (let i = 0; i < playerNameAndHighScore.length; i++) {
        let tableRow = document.createElement('tr');
        let nameTh = document.createElement('th');
        let scoreTd = document.createElement('td');
        tableOne.appendChild(tableRow);
        nameTh.textContent = playerNameAndHighScore[i].name;
        scoreTd.textContent = playerNameAndHighScore[i].score;
        tableRow.appendChild(nameTh);
        tableRow.appendChild(scoreTd);
      }
    }
}

renderPlayerScore();


// function testArray () {
//     for (let i = 0; i < playerNameAndHighScore.length; i++) {
//         let testName = playerNameAndHighScore[i].name;
//         let testScore = playerNameAndHighScore[i].score;
//         console.log(testName);
//         console.log(testScore);
//     }
// }

// testArray();

function scoreChart() {

  let names = [];
  let scores = [];

  for (let i = 0; i < playerNameAndHighScore.length; i++) {
    names.push(playerNameAndHighScore[i].name);
    scores.push(playerNameAndHighScore[i].score);
  
  }
  
  // Chart sourced from "https://www.chartjs.org/docs/latest/getting-started/"
  // This chart will render the results of each images views and clicks in a bar graph
  const ctx = document.getElementById('myChart');
  if (ctx) {

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: names,
        datasets: [{
          label: 'Scores',
          data: scores,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

scoreChart();

function askPlayerName () {
  let promptName = prompt('What is your name?');
  // while (promptName = null) {

  // }
  if (promptName) {
    console.log(promptName);
    // change score to userScore
    let createNewPlayer = new Player(promptName, userScore);
    playerNameAndHighScore.sort((a,b) => b.score - a.score);
    // console.log(createNewPlayer);
    // console.log(playerNameAndHighScore);
    
    let refreshTable = document.getElementById('easyTable')
    if (refreshTable) {
      refreshTable.innerHTML = '';
      renderPlayerScore();
    }

    let savedPlayer = JSON.stringify(playerNameAndHighScore);
    localStorage.setItem('player', savedPlayer);
  } else {
    alert('Please enter a name!')
    askPlayerName();
  }


}

// console.log(createNewPlayer);
// askPlayerName();


// update table after player has input their name on loss.
// for LS, find unique key name to create new object.