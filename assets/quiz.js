// DOM Reference variables
var startBtnEl = document.querySelector("#startbtn");

// Global Variables for timer
var timeLeft = 60;
var intervalId;
var currentQuestion = 0;

// start button click event
startBtnEl.addEventListener("click", function () {

  // start timer
  intervalId = setInterval(function () {

    timeLeft--;
    timer.innerHTML = timeLeft;
    // ends quiz if timer reaches 0
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      displayGameOver();
    }
  }, 1000);

  // display first question & hide the quiz start elements
  var quizStartEl = document.getElementById("start-quiz");
  if (quizStartEl) {
    quizStartEl.classList.add("hidden");
  }

  displayQuestion();
});

// displays the questions and their corresponding answers
var choicesEl = document.querySelector("#choices");

function displayQuestion() {
  var questionCard = document.getElementById("question-card");
  questionCard.removeAttribute("class", "hidden");

  var timer = document.getElementById("timer");
  timer.removeAttribute("class");

  let question = questions[currentQuestion];
  document.getElementById("question-header").innerHTML = question.text;

  let choices = question.choices;
  document.getElementById("choices").innerHTML = "";

  for (let i = 0; i < choices.length; i++) {

    var choice = choices[i];
    var btn = document.createElement("button");
    btn.classList.add("questionBtn");
    btn.innerHTML = choice;
    btn.addEventListener("click", function () {

      if (choice === question.answer) {

        currentQuestion++;
        if (currentQuestion === questions.length) {

          displayGameOver();
        } else {
          displayQuestion();
        }
      } else {
        timeLeft -= 5;
        timer.textContent = timeLeft;
        if (timeLeft <= 0) {
          clearInterval(intervalId);
          displayGameOver();
        }
      }
    });

    document.getElementById("choices").appendChild(btn);
  }
}

// array of questions
const questions = [
  {
    text: 'What does the abbreviation "DOM" stand for?',
    choices: [
      "Document Object Model",
      "Data Oriented Module",
      "Data Oriented Model",
      "Document Oriented Module",
    ],
    answer: "Document Object Model",
  },
  {
    text: 'What is a "Method" in JavaScript?',
    choices: [
      "Methods are functions stored as object properties",
      "A JavaScript method is a property containing a function definition",
      "Methods are object properties",
      "A JavaScript method is a block of code written to perform some specific set of tasks",
      'A JavaScript method is a collection of properties with key values that can either be a "data" property or an "accessor" property',
    ],
    answer:
      "A JavaScript method is a property containing a function definition",
  },
  {
    text: 'What is an "object" in JavaScript?',
    choices: [
      "a material item that can be seen and touched",
      "a type of data that can store and manipulate text",
      "a data type that can take in a different types of data values",
      "a sequence of characters",
    ],
    answer: "a data type that can take in a different types of data values",
  },
  {
    text: 'What is an "arity" in JavaScript?',
    choices: [
      "a script to shrink text to live inside larger objects",
      "a type of data that will initialize a method",
      "a property describing the number of arguments in a function",
      "a function used to shrink an index",
    ],
    answer: "a property describing the number of arguments in a function",
  },
  {
    text: "In JavaScript, ____ function is not identified by a name.",
    choices: ["anonymous", "John Doe", "blank", "undefined"],
    answer: "anonymous",
  },
  {
    text: "In JavaScript, ____ is what you call functions, classes, or variables that are declared at the top of their scope prior to the execution of the code.",
    choices: ["rigging", "holstering", "hosting", "hoisting"],
    answer: "hoisting",
  },
  {
    text: "In JavaScript, a ____ is what you call changes or modifications to DOM elements.",
    choices: ["mutatant", "mutation", "mutual", "mantra"],
    answer: "mutation",
  },
  {
    text: "In JavaScript, and life, ____ is what you call the standard coding writing style practices without any flair or frameworks.",
    choices: ["beige", "boring", "vanilla", "basic"],
    answer: "vanilla",
  },
  {
    text: "In JavaScript, a ____ is when you write the code to perform a specific task(s) repeatedly under certain conditions.",
    choices: ["loop", "curl", "straw", "lobe"],
    answer: "loop",
  },
  {
    text: "In JavaScript, a ____ is when you write the code to perform a specific task(s) repeatedly under certain conditions.",
    choices: ["loop", "curl", "straw", "lobe"],
    answer: "loop",
  },
  {
    text: 'Out of the below, which is a "String Method":',
    choices: ["splice", "lint", "straw", "slice"],
    answer: "slice",
  },
  {
    text: "In order to get an HTML element via the ID and source it in JavaScript you would use a ___ method.",
    choices: [
      "getWreckedById()",
      "getElementByIp()",
      "getElementId()",
      "getElementById()",
    ],
    answer: "getElementById()",
  },
];

// displays the gameover card and the 
function displayGameOver() {

  clearInterval(intervalId);
  var questionCard = document.getElementById("question-card");
  var gameOverCard = document.getElementById("gameover-card");

  if (gameOverCard) {
    gameOverCard.classList.remove("hidden");
  }

  if (questionCard) {
    questionCard.classList.add("hidden");
  }

  saveScores();
}

// storage & submit click event
var scoreCardEl = document.getElementById("scoreCard");
var saveScores = document.getElementById("saveScores");
var submitBtnEl = document.getElementById("submitBtn");
var saveScore;
var saveInitials;

function saveScores(event) {

  event.preventDefault();
  var saveInitials = initials.value;
  if(localStorage.hasOwnProperty("saveScores")){

    saveScores = JSON.parse(localStorage.getItem("saveScores"));
    saveScores.push({
      initials: saveInitials,
      score: saveScore
    });
  } else {

    saveScores = [{
      initials: saveInitials,
      score: saveScore
    }];
  }

  localStorage.setItem("saveScores", JSON.stringify(saveScores));
  displayScoreCardEl(); 
}

function displayScoreCardEl() {

  storedScores = JSON.parse(localStorage.getItem("saveScores"));
  for(var i =0; i<storedScores.length; i++) {

    var newScore = document.createElement("li");
    newScore.textContent = storedScores[i].initials + " " + storedScores[i].score;
    scoreStoreList.appendChild(newScore);
  }

  scoreCardEl.classList.remove("hidden");
}

submitBtnEl.addEventListener("submit", saveScores);

  
