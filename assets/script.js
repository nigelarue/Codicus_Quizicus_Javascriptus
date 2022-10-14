console.log("beepboop");
const startBtn = document.querySelector('#startBtn');
const timerDiv = document.querySelector('#timer');
const timeSpan = document.querySelector('')
const questionsDiv = document.querySelector('#questions');

const timeSpan = document.querySelector('#')
// array of questions
const questions = [
 {
  text: 'test question 1'
  choices: ['answer1', 'answer2', 'answer3', 'answer4'],
  answer: 'answer 1'
 }
 {
  text: 'test question 2'
  choices: ['answer1', 'answer2', 'answer3', 'answer4'],
  answer: 'answer 1'
 }
 {
  text: 'test question 3'
  choices: ['answer1', 'answer2', 'answer3', 'answer4'],
  answer: 'answer 1'
 }
];

let questionIndex = 0;
let time = 60;
let quizTimer;


const startQuiz = ()
=> {
 quizTimer = setInterval(function() {
  time--
  timeSpan.textContent = time;
  if (time === 0) {
   endQuiz();
  };
 }, 1000);

 displayQuestion();

};

const displayQuestion = () => {
 questionsDiv.innerHTML = '';
 const questionText = questions[questionsIndex].text;
 const questionsAns = questions[questionIndex].answer;
 // questionsDiv.append(questionText);
 const questionTextDiv = document.createElement('div');
 questionTextDiv.innerText = questionText;
 const questionChoices = questions[questionIndex].choices;

 questionsDiv.append(questionTextDiv);

 questionChoices.forEach(question => {
  const questionBtn = document.createElement('button');
  questionBtn.textContent = choice;
  questionsDiv.append(questionsBtn);

  questionBtn.addEventListener('click', function(event){
   if (event.target.textContent === questionAns) {
    handleCorrectAns();
   } else {
    handleIncorrectAns();
   };
  })
 });


};

const handleCorrectAns = () => {
 if (currentAns)
};

const handleIncorrectAns = () => {

};


const endQuiz = () => {
 clearInterval(quizTimer);
}


startBtn.addEventListener('click', startQuiz);

