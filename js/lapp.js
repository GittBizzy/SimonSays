'use strict'

console.log('Hello, world');

// Leaderboard table
let playerNameAndHighScore = [];

function Player(name, score) {
  this.name = name;
  this.score = score;
  playerNameAndHighScore.push(this);
}



let playerOne = new Player('Anthony', 999);
let playerTwo = new Player('Nick', 998);
let playerThree = new Player('Paula', 997);
let playerFour = new Player('Jennifer', 996);
let playerFive = new Player('Peter', 995);


console.log(playerNameAndHighScore);

function renderPlayerScore() {
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

function testArray() {
  for (let i = 0; i < playerNameAndHighScore.length; i++) {
    let testName = playerNameAndHighScore[i].name;
    let testScore = playerNameAndHighScore[i].score;
    console.log(testName);
    console.log(testScore);
  }
}

testArray();

console.log(renderPlayerScore);

function testChart() {

  // creating empty arrays for names, views and clicks
  let names = [];
  let scores = [];



  // for loop to iterate through each item in the productsArr array, each iteration pushes the current indices name, views, and clicks into their corresponding array.
  for (let i = 0; i < playerNameAndHighScore.length; i++) {
    names.push(playerNameAndHighScore[i].name);
    scores.push(playerNameAndHighScore[i].score);

  }

  // Chart sourced from "https://www.chartjs.org/docs/latest/getting-started/"
  // This chart will render the results of each images views and clicks in a bar graph
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: names,
      datasets: [{
        backgroundColor: ["#FF10F0", "#1F51FF", "#FF3131", "#0FFF50", "#FFEA00"],
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

testChart();


// Chart sourced from "https://www.chartjs.org/docs/latest/getting-started/"
// This chart will render the results of each images views and clicks in a bar graph


