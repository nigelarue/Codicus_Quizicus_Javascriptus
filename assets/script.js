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
  choices: ['Methods are functions stored as object properties', 'A JavaScript method is a property containing a function definition', 'Methods are object properties', 'A JavaScript method is a block of code written to perform some specific set of tasks', 'A JavaScript method is a collection of properties with key values that can either be a "data" property or an "accessor" property'],
  answer: 'A JavaScript method is a property containing a function definition'
 },
 {
  text: 'What is an "object" in JavaScript?',
  choices: ['a material item that can be seen and touched', 'a type of data that can store and manipulate text', 'a data type that can take in a different types of data values', 'a sequence of characters'],
  answer: 'a data type that can take in a different types of data values'
 },
 {
    text: 'What is an "arity" in JavaScript?',
    choices: ['a script to shrink text to live inside larger objects', 'a type of data that will initialize a method', 'a property describing the number of arguments in a function', 'a function used to shrink an index'],
    answer: 'a property describing the number of arguments in a function'
 },
 {
    text: 'In JavaScript, ____ function is not identified by a name.',
    choices: ['anonymous', 'John Doe', 'blank', 'undefined'],
    answer: 'anonymous'
 },
 {
    text: 'In JavaScript, ____ is what you call functions, classes, or variables that are declared at the top of their scope prior to the execution of the code.',
    choices: ['rigging', 'holstering', 'hosting', 'hoisting'],
    answer: 'hoisting'
 },
 {
    text: 'In JavaScript, a ____ is what you call changes or modifications to DOM elements.',
    choices: ['mutatant', 'mutation', 'mutual', 'mantra'],
    answer: 'mutation'
 },
 {
    text: 'In JavaScript, and life, ____ is what you call the standard coding writing style practices without any flair or frameworks.',
    choices: ['beige', 'boring', 'vanilla', 'basic'],
    answer: 'vanilla'
 },
 {
    text: 'In JavaScript, a ____ is when you write the code to perform a specific task(s) repeatedly under certain conditions.',
    choices: ['loop', 'curl', 'straw', 'lobe'],
    answer: 'loop'
 },
 {
    text: 'In JavaScript, a ____ is when you write the code to perform a specific task(s) repeatedly under certain conditions.',
    choices: ['loop', 'curl', 'straw', 'lobe'],
    answer: 'loop'
 },
 {
    text: 'Out of the below, which is a "String Method":',
    choices: ['splice', 'lint', 'straw', 'slice'],
    answer: 'slice'
 },
 {
    text: 'In order to get an HTML element via the ID and source it in JavaScript you would use a ___ method.',
    choices: ['getWreckedById()', 'getElementByIp()', 'getElementId()', 'getElementById()'],
    answer: 'getElementById()'
 },
];

export default questions;