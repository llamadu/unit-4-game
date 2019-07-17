//  VARIABLES
// =================================================================

//  crystals
var crystal = {
  blue:
  {
    name: "Blue",
    value: 0
  },
  green:
  {
    name: "Green",
    value: 0
  },
  red:
  {
    name: "Red",
    value: 0
  },
  yellow:
  {
    name: "Yellow",
    value: 0
  }
};

// Scoring
var currentScore = 0;
var targetScore = 0;

// Wins and Losses
var winCount = 0;
var lossCount = 0;


// FUNCTIONS
// =================================================================

// generate random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Start and restart
var startGame = function() {

  // Reset Score
  currentScore = 0;

  // reset Target 
  targetScore = getRandom(19, 120);

  // new random crystal values(between 1 and 12)
  crystal.blue.value = getRandom(1, 12);
  crystal.red.value = getRandom(1, 12);
  crystal.green.value = getRandom(1, 12);
  crystal.yellow.value = getRandom(1, 12);

  // update the HTML
  $("#your-score").text(currentScore);
  $("#target-score").text(targetScore);



};

// win or loss - reset
var checkWin = function() {

  // Check if currentScore > targetScore
  if (currentScore > targetScore) {
    alert("Sorry. You lost!");
    console.log("You Lost");

    // Add to losses
    lossCount++;

    // Change Loss Count HTML
    $("#loss-count").text(lossCount);

    // Restart
    startGame();
  }

  else if (currentScore === targetScore) {
    alert("Yay! You Won!");
    console.log("Win!");

    // Add to wins
    winCount++;

    // Change Win Count HTML
    $("#win-count").text(winCount);

    // Restart 
    startGame();
  }

};

// take in clicks on the crystals
var addValues = function(clickedCrystal) {

  // add to currentScore
  currentScore += clickedCrystal.value;

  // Change the HTML to reflect score
  $("#your-score").text(currentScore);

  // checkWin Function
  checkWin();

};

//  Game process
// =================================================================

// Initial game start
startGame();

$("#blue").click(function() {
  addValues(crystal.blue);
});

$("#red").click(function() {
  addValues(crystal.red);
});

$("#green").click(function() {
  addValues(crystal.green);
});

$("#yellow").click(function() {
  addValues(crystal.yellow);
});
