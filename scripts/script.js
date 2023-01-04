"use strict"

// selecting elements
const btnNew = document.getElementById("btn--new");
const btnRoll = document.getElementById("btn--roll");
const btnHold = document.getElementById("btn--hold");
// player elements
const player0El = document.getElementById("player--0");
const player1El = document.getElementById("player--1");
// score elements
const score0El = document.getElementById("score-0");
const score1El = document.getElementById("score-1");
// current elements
const curScore0El = document.getElementById("current--0");
const curScore1El = document.getElementById("current--1");
// dice elements
const diceEl = document.getElementById("dice");

// global variable
let scores, currentScore, activePlayer, dice;

// init function
function init() {
  // global value
  scores = 0;
  currentScore = 0;
  activePlayer = 0;
  dice = 0;

  // initial scores
  score0El.innerText = 0;
  score1El.innerText = 0;
  curScore0El.innerText = 0;
  curScore1El.innerText = 0;

  // active player
  player0El.classList.add("player-active");
  player1El.classList.remove("player-active");

  // button function
  btnRoll.classList.remove("hidden");
  btnHold.classList.remove("hidden");

  // dice img hidden
  diceEl.classList.add("hidden");
}

// functions
function getRandomNumber(num) {
  // create random number
  return Math.floor(Math.random() * num) + 1;
};

// toggle function
function switchPlayer() {
  player0El.classList.toggle("player-active");
  player1El.classList.toggle("player-active");

  // display score
  document.getElementById(`score-${activePlayer}`).innerText =
    scores[activePlayer];
  currentScore = 0;

  document.getElementById(`current-${activePlayer}`).innerText = currentScore;

  // ternary operators switch players
  activePlayer = activePlayer === 0 ? 1 : 0;
}
// event listeners
btnRoll.addEventListener("click", function () {
  // get random number 1 to 6
  dice = getRandomNumber(6);

  console.log(dice);
  // display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `./images/dice-${dice}.png`;

  // dice === 1

  if (dice !== 1) {
    currentScore = currentScore + dice;
    console.log(currentScore);

    // display current score to ui
    document.getElementById(`current-${activePlayer}`).innerText = currentScore;
  } else {
    // switch to other player
    switchPlayer();
  }
});

// add current score to score
btnHold.addEventListener("click", function () {
  scores[activePlayer] = scores[activePlayer] + currentScore;
  currentScore = 0;

  document.getElementById(`current-${activePlayer}`).innerText = currentScore;

  // if score is >= 100
  if (scores[activePlayer] >= 10) {
    // player wins
    document
      .getElementById(`player-${activePlayer}`)
      .classList.remove("player-active");

    document
      .getElementById(`player-${activePlayer}`)
      .classList.add("player-winner");

    document.getElementById(`score-${activePlayer}`).innerText =
      scores[activePlayer];

    diceEl.classList.add("hidden");
    btnRoll.classList.add("hidden");
    btnHold.classList.add("hidden");
    // switch Player
  } else {
    switchPlayer();
  }
});

// btn to new game
btnNew.addEventListener("click", function () {
  init();
});

// initial setup
init();
