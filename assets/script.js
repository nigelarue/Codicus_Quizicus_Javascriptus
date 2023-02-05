console.log("beepboop");
const questionsDiv = document.querySelector('#questions');

const timeSpan = document.querySelector('#')
// array of questions
const questions = [
 {
  text: 'What does the abbreviation "DOM" stand for?',
  choices: ['Document Object Model', 'Data Oriented Module', 'Data Oriented Model', 'Document Oriented Module'],
  answer: 'Document Object Model'
 },
 {
  text: 'What is a "Method" in JavaScript?',
  choices: ['Methods are functions stored as object properties.', 'A JavaScript method is a property containing a function definition.', 'Methods are object properties.', 'A JavaScript method is a block of code written to perform some specific set of tasks.', 'A JavaScript method is a collection of properties with key values that can either be a "data" property or an "accessor" property.'],
  answer: 'A JavaScript method is a property containing a function definition.'
 },
 {
  text: 'What is an "object" in JavaScript?',
  choices: ['a material item that can be seen and touched.', 'a type of data that can store and manipulate text', 'a data type that can take in a different types of data values.', 'a sequence of characters.'],
  answer: 'a data type that can take in a different types of data values.'
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

// use modules instead of prompts
// go to new page for highscores
