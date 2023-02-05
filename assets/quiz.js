// Import questions from script.js
import questions from './script';
// DOM Reference variables
var startBtnEl = document.querySelector('#startbtn');
var timer = document.querySelector('#timer');
var questionsEl = document.querySelector('#questions');
var choicesEl = document.querySelector('#choices');
var submitBtnEl = document.querySelector('#submit-btn');
var initialsEl = document.querySelector('#initials')
var questionCard = document.querySelector('#question-card');
var gameOverCard = document.querySelector('#gameover-card');
var quizStartEl = document.querySelector('#start-quiz');
var scoreCardEl = document.querySelector('#score-card');
// Global Variables to keep track of the time remaining
var timeLeft = 60;

// Variable to keep track of the interval ID
var intervalId;
var currentQuestion = 0;

// Functions: methods/actions/handlers

// start button click event
startBtnEl.addEventListener('click', function() {
    // start timer
    intervalId = setInterval(function() {
        timeLeft--;
        timer.innerHTML = timeLeft;

        // ends quiz if timer reaches 0
        if (timeLeft === 0) {
            clearInterval(intervalId);
            endQuiz();
        }
    }, 1000);
    // display first question & hide the quiz start elements
    quizStartEl.setAttribute('class', 'hide');
    
    displayQuestion();
});

// show the first question
function displayQuestion() {
    questionCard.classList.remove("hide");
    let question = questions[currentQuestion];
    document.getElementById("question-header").innerHTML = question.text;
    let choices = question.choices;
    for (let i = 0; i < choices.length; i++) {
        let choice = choices[i];
        let btn = document.createElement("button");
        btn.innerHTML = choice;
        btn.addEventListener("click", function () {
            if (i === question.answer) {
                currentQuestion++;
                if (currentQuestion === questions.length) {
                    // show 'game over card'
                    displayGameOver();
                } else {
                    displayQuestion();
                }
            } else {
                // decrease the time here/error
                timeLeft -= 5;
                time.textContent = timeLeft;
            }
        });
        document.getElementById("choices").appendChild(btn);
    }
}

function endQuiz() {
    questionCard.setAttribute('class', 'hide');
    
}

function displayGameOver () {
    gameOverCard.classList.remove("hide");
    saveScores();
}


// storage
function saveScores() {
    var initials = initialsEl.value.trim();
    var score = JSON.parse(window.localStorage.getItem("timeLeft"));
    var newScore = {
        score: time,
        initials: initials,
    };
    score.push(newScore);
    window.localStorage.setItem("scores", JSON.stringify(score));
}

// click events
submitBtnEl.onclick = saveScores;

// END OF PROGRAM