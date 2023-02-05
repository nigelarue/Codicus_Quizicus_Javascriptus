// DOM Reference variables
var answerChoicelistEl = document.querySelector('')
var startBtnEl = document.querySelector('#startbtn');
var timer = document.querySelector('#timer');

// Global Variables to keep track of the time remaining
var timeLeft = 60;

// Variable to keep track of the interval ID
var intervalId;

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
    // display first question
    displayQuestion();

});


// start timer
function startQuiz) {
    setInterval(function() => {
        if(timeLeft < 0 ) {
            endQuiz()
        }
    
}, 60);

// show the first
}

function onAnswerChoiceClick () {

}

function init() {
//  show previous high score
}

function endQuiz () {
    // prompt user for name
    // local storage
    promptUserForName()
}

function promptUserForName

// Initiators
startBtnEl.addEventListener('click', startQuiz)

init()
// END OF PROGRAM