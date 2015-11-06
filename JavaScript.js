//TODO Create slideshow for me so I know what to do & what order...
//TODO Make CSS pretty


var stringExample = 'This is some text.';
var numberExample = 4830.38;
document.getElementById('question').innerHTML = stringExample + (numberExample * 2);
var arrayExample = ['Bob', 'Susie', 'Johnny', 'Brianna']; // list of numbered items starting with 0
var objectExample = { firstName: 'Bob', lastName: 'Smith' } // list of named items


var questions = [
    {
        question: 'What planet is closest to the sun?',
        answer: 'Mercury',
        choices: [
            'Earth',
            'Pluto',
            'Mercury',
            'Venus'
        ],
        replies: {
            correct: 'Way to go astronomist!',
            incorrect: 'You will not be navigating my spaceship anytime soon.'
        }
    },

    {
        question: 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?',
        answer: '700 pounds',
        choices: [
            '200 pounds',
            '700 pounds',
            '5.3 tons',
            'They don\'t chuck wood'
        ],
        replies: {
            correct: 'Congratulations! You know your woodchucks!',
            incorrect: 'May I recommend reading "Woodchucks 101 For Beginners"?'
        }
    },

];

var score = 0;
var currentQuestion = 0;

var scoreContainer = document.getElementById('score');
var questionContainer = document.getElementById('question');
var answerResultContainer = document.getElementById('answerResult');
var answerContainer = document.getElementById('answers');

scoreContainer.innerHTML = 0;


//First function to show
function adjustScore(value) {
    score = score + value;
    scoreContainer.innerHTML = score;
}

function askQuestion(questionNumber) {
    currentQuestion = questionNumber;
    questionContainer.innerHTML = questions[questionNumber].question;
    answerContainer.innerHTML = showAnswerChoices(questionNumber);
    addAnswerButtonListener();
}

function showAnswerChoices(questionNumber) {
    var answerChoices = '';
    questions[questionNumber].choices.forEach(function (value, index) {
        answerChoices += '<button>' + value + '</button>';
    });
    return answerChoices;
}

function addAnswerButtonListener() {
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons.item(i).addEventListener('click', checkGuessedAnswer);
    }
}

function checkGuessedAnswer() {
    var answerGuessed = this.innerHTML;
    if (questions[currentQuestion].answer == answerGuessed) {
        respondForCorrectAnswer();
    } else {
        respondForIncorrectAnswer();
    }
    nextQuestion();
}

function respondForCorrectAnswer() {
    answerResultContainer.innerHTML = questions[currentQuestion].replies.correct;
    adjustScore(10);
}

function respondForIncorrectAnswer() {
    answerResultContainer.innerHTML = questions[currentQuestion].replies.incorrect;
    adjustScore(-10);
}

function nextQuestion() {
    currentQuestion = currentQuestion + 1;
    if (currentQuestion >= questions.length) {
        gameOver();
    } else {
        askQuestion(currentQuestion);
    }
}

function gameOver() {
    answerContainer.innerHTML = '';
    questionContainer.innerHTML = 'Game Over!';
}

askQuestion(0);