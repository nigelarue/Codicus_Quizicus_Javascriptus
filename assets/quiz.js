// DOM Reference variables
var startBtnEl = document.querySelector("#startbtn");
var questionCard = document.getElementById("question-card");
var timer = document.getElementById("timer");
var timerTitle = document.getElementById("timerTitle");
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
  var quizStartEl = document.getElementById("startQuiz");
  if (quizStartEl) {
    quizStartEl.classList.add("hidden");
  }

  displayQuestion();
});

// displays the questions and their corresponding answers
var choicesEl = document.querySelector("#choices");

function displayQuestion() {
  questionCard.removeAttribute("class", "hidden");
  timer.removeAttribute("class");
  timerTitle.removeAttribute("class");
  let question = questions[currentQuestion];
  document.getElementById("question-header").innerHTML = question.text;

  let choices = question.choices;
  document.getElementById("choices").innerHTML = "";

  for (let i = 0; i < choices.length; i++) {
    let choice = choices[i];
    let btn = document.createElement("button");
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
    text: "A JavaScript ____ is a property containing a function definition?",
    choices: ["method", "dictionary", "string", "trait", "moment"],
    answer: "method",
  },
  {
    text: "What is a data type that can take in a different types of data values in JavaScript?",
    choices: ["data", "object", "property", "prop"],
    answer: "object",
  },
  {
    text: "What is a property describing the number of arguments in a function ___ in JavaScript?",
    choices: ["trait", "prop", "array", "arity"],
    answer: "arity",
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
var scoreCardEl = document.getElementById("scoreCard");
var formScores = document.getElementById("submitBtn");
var scoreStoreList = document.getElementById("scoreStoreList");
var scoreList = document.getElementById("scoreList");
var storedScores;
var saveScore;

function displayGameOver() {
  userScore = timeLeft;
  clearInterval(intervalId);
  var questionCard = document.getElementById("question-card");
  var gameOverCard = document.getElementById("gameOverCard");

  if (gameOverCard) {
    gameOverCard.classList.remove("hidden");
  }

  if (questionCard) {
    questionCard.classList.add("hidden");
  }
  if (timerTitle) {
    timerTitle.classList.add("hidden");
  }
  scoreCardEl.classList.remove("hidden");
  displayData();
  addScores();
}

function storeData() {
  var saveInitials = document.getElementById("initials").value;
  var userScore = document.getElementById("score").value;

  if (localStorage.hasOwnProperty("saveScores")) {
    saveScore = JSON.parse(localStorage.getItem("saveScores"));
    saveScore.push({
      initials: saveInitials,
      score: userScore,
    });
  } else {
    saveScore = [
      {
        initials: saveInitials,
        score: userScore,
      },
    ];
  }

  localStorage.setItem("saveScores", JSON.stringify(saveScore));
  localStorage.setItem("userScore", document.getElementById("initials").value);
}

function displayData() {
  console.log(displayData);
  document.getElementById("scoreStoreList").innerHTML = storedData;
  if (localStorage.getItem("saveScores")) {
    storedScores = JSON.parse(localStorage.getItem("saveScores"));
    for (var i = 0; i < storedScores.length; i++) {
      var newScore = document.createElement("li");
      newScore.textContent =
        storedScores[i].initials + " " + storedScores[i].score;
      scoreStoreList.appendChild(newScore);
    }
  }
}

function addScores(event) {
  storeData();
  event.preventDefault();
  console.log(saveScore);
  displayData();
}

document.getElementById("submitBtn").addEventListener("click", addScores);
