'use strict'

console.log('Hello, world');

// Leaderboard table
let playerNameAndHighScore = [];

function Player (name, score) {
  this.name = name;
  this.score = score;
  playerNameAndHighScore.push(this);
}

let playerOne = new Player ('Anthony', 999);
let playerTwo = new Player ('Nick', 998);
let playerThree = new Player ('Paula', 997);
let playerFour = new Player ('Jennifer', 996);
let playerFive = new Player ('Peter', 995);


console.log(playerNameAndHighScore);

function renderPlayerScore () {
    let tableOne = document.getElementById('easyTable');
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

renderPlayerScore();

function testArray () {
    for (let i = 0; i < playerNameAndHighScore.length; i++) {
        let testName = playerNameAndHighScore[i].name;
        let testScore = playerNameAndHighScore[i].score;
        console.log(testName);
        console.log(testScore);
    }
}

testArray();

console.log(renderPlayerScore);

const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
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
