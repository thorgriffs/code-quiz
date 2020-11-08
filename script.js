// VARIABLES

var timerEL = document.getElementById("timer");
var highScoreEl = document.getElementById("viewHighScore");
var timeRemaining = 60
var interval
var questionIndex = 0;
var score = 0;
var correctAnswerPoints = 10;
var incorrectAnswerTimePenalty = 10;
var maxNumberHighScores = 5;

// Quiz questions and answers
var quizQuestions = [
    {question: "Commonly used data types DO NOT include:", answers: ["strings", "booleans", "alerts", "numbers"], correctAnswer: 2},

    {question: "The condition in an if/else statement is enclosed within _____.", answers: ["quotes", "curly brackets", "parentheses", "square brackets"], correctAnswer: 2},

    {question: "Arrays in JavaScript can be used to store ____.", answers: ["numbers and strings", "other arrays", "booleans", "all of the above"], correctAnswer: 3},

    {question: "String values must be enclosed within ____ when being assigned to variables", answers: ["commas", "curly brackets", "quotes", "parentheses"], correctAnswer: 2},

    {question: "A very useful tool used during development and debugging for printing content to the debugger is:", answers: ["JavaScript", "terminal/bash", "for loops", "console.log"], correctAnswer: 3}
]

showStart();

// Hide & unhide divs on Start screen
function showStart() {
    score = 0;
    timerEL.textContent = 0;
    // Display starting page
    var quizStart = document.querySelector('.startQuiz');
    quizStart.classList.remove('hidden');     
    // Display header
    var header = document.querySelector('header');
    header.classList.remove('hidden');
    // Hide quiz questions and answers
    var qa = document.querySelector('.quizTime');
    qa.classList.add('hidden');    
    // Hide the Game Over screen
    var gameOver = document.querySelector('.gameOver');
    gameOver.classList.add('hidden');
    // Hide High Score screen
    var highScore = document.querySelector('.highScore');
    highScore.classList.add('hidden');
    document.getElementById('initials').value = '';
}

// Timer
function showTimer() {
    timerEL.textContent = timeRemaining;
    interval = setInterval(function() {
        timerEL.textContent = timeRemaining;
        timeRemaining--;        
        
        if (timeRemaining <= 0) {
            timerEL.textContent = 0;
            console.log("You are at zero");
            showGameOver();            
        }
    }, 1000);
}

// Start Quiz 
function startQuiz() {
    // set/reset quiz variables
    score = 0;    
    timeRemaining = 60;  
    questionIndex = -1; 
    showTimer();

    // hide the .startQuiz div
    var quizStart = document.querySelector('.startQuiz');
    quizStart.classList.add('hidden');    

    // show the quiz questions and answers
    var qa = document.querySelector('.quizTime');
    qa.classList.remove('hidden');    

    // once answered, display the next question
    showQuestion();
}

// Display Quiz questions and answers
function showQuestion() {
    questionIndex++;

    if (questionIndex >= quizQuestions.length) {
        showGameOver();
        return;
    }

    var answersDiv = document.getElementById('answers');
    answersDiv.textContent = '';

    var question = quizQuestions[questionIndex];
    var questionDisplay = document.getElementById('quizQuestion');
    questionDisplay.textContent = question.question; 

    for (let i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        var button = document.createElement('button');
        button.textContent = (i + 1) + ". " + answer;
        button.type = 'button';
        button.onclick = function() {
            onAnswerClicked(i);
        }
        button.classList.add('answer');
        answersDiv.appendChild(document.createElement('br'));
        answersDiv.appendChild(button);
    }
}

// Determine if selected answer is right or wrong
function onAnswerClicked(answerIndex) {
    var currentQuestion = quizQuestions[questionIndex];
    var isCorrect = currentQuestion.correctAnswer === answerIndex;

    if (isCorrect) {
        score = score + correctAnswerPoints;
    }
    else {
        timeRemaining = timeRemaining - incorrectAnswerTimePenalty;
        if (timeRemaining <= 0) {
            timeRemaining = 0;
            showGameOver();
            return;
        }
    }
    showQuestion();
}

// Shows the All Done screen
function showGameOver() {
    clearInterval(interval);
        
    // hide the questions div
    var qa = document.querySelector('.quizTime');
    qa.classList.add('hidden');            
    
    // show .gameOver div
    var showGameOver = document.querySelector('.gameOver');
    showGameOver.classList.remove('hidden');

    var finalScore = document.getElementById('score');
    finalScore.textContent = score;
}

// Determines high scores to display   
function getHighScores() {
    var highScores = JSON.parse(localStorage.getItem('highScores'));
    if (!highScores) {
        highScores = [];
    }
return highScores;
}

function submitHighScores() {
    var highScores = getHighScores();
    var initials = document.getElementById('initials');
    highScores.push({initials: initials.value, score: score});

    highScores.sort(function (a,b) {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }
        return 0;
    });

    while (highScores.length > maxNumberHighScores) {
        highScores.pop();
    }

    localStorage.setItem('highScores', JSON.stringify(highScores));

    showHighScore();
}

// Displays the high scores list
function showHighScore() {
    clearInterval(interval);
    // hide the .startQuiz div
    var quizStart = document.querySelector('.startQuiz');
    quizStart.classList.add('hidden');    
    // hide .gameOver div
    var showGameOver = document.querySelector('.gameOver');
    showGameOver.classList.add('hidden');
    // Hide quiz questions and answers
    var qa = document.querySelector('.quizTime');
    qa.classList.add('hidden'); 
    // show high score div
    var highScore = document.querySelector('.highScore');
    highScore.classList.remove('hidden');
    // hide header
    var header = document.querySelector('header');
    header.classList.add('hidden');

    var highScores = getHighScores();    

    var showScoresDiv = document.getElementById('showScores');
    showScoresDiv.textContent = '';

    for (var i =0; i < highScores.length; i++) {
        var highScore = highScores[i];
        var scoreSpan = document.createElement('span');
        var scoreBr = document.createElement('br');
        showScoresDiv.appendChild(scoreBr);
        scoreSpan.textContent = highScore.initials + "-" + highScore.score;
        showScoresDiv.appendChild(scoreSpan);
    }
}

 // Clears the high scores list on click of the Clear Highscores button 
function clearHighScores() {
    localStorage.removeItem('highScores');
    showHighScore();       
    showStart();   
}