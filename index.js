var readlineSync = require("readline-sync");
var score = 0;
 
// data of high score
var highScores = [
  {
    name: "Subhajyoti",
    score: 3,
  },

  {
    name: "Mike",
    score: 2,
  },
]

// array of objects
var questions = [{
  question: "What is the name of the main character of breaking bad ?",
  answer: "walter white"
}, {
  question: "What color of meth do Walter and Jesse make?",
  answer: "blue"
},
{
  question: "What is the name of Walter’s wife?",
  answer: "skyler"
}];

function welcome() {
 var userName = readlineSync.question("What's your name? ");

  console.log("Welcome "+ userName + " do you seen breaking bad? if yes then lets go the quiz");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();