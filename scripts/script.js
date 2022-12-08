'use strict';

// selecting elements
const btnNew = document.getElementById('btn--new');
const btnRoll = document.getElementById('btn--roll');
const btnHold = document.getElementById('btn--hold');
// player elements
const player0El = document.getElementById('player--0');
const player1El = document.getElementById('player--1');
// score elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
// current elements
const curScore0El = document.getElementById('current--0');
const curScore1El = document.getElementById('current--1');
// dice elements
const diceEl = document.getElementById('dice');

// global variable
let scores, currentScore, activePlayer, dice;

// functions


