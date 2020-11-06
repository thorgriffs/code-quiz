// create a var countdownTime = 60; to create the timer that conditionally hides

var timerEL = document.getElementById("timer");
var timeRemaining = 60
var interval
var questionIndex = 0;

// Timer
function showTimer() {
    interval = setInterval(function() {
        timerEL.textContent = "Timer: " + timeRemaining;
        timeRemaining--;        
        
        if (timeRemaining <= 0) {
            timerEL.textContent = "Timer: 00";
            console.log("You are at zero");
            showGameOver();            
        }
    }, 1000);
}

// create variables to hold the questions and answers and identify the answers that are true/false

var quizQuestions = [
    {question: "Commonly used data types DO NOT include:", 
    answers: ["strings", ,"booleans", "alerts", "numbers"], 
    correctAnswer: 2},

    {question: "The condition in an if/else statement is enclosed within _____.", 
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2},

    {question: "Arrays in JavaScript can be used to store ____.", 
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3},

    {question: "String values must be enclosed within ____ when being assigned to variables", 
    answers: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 2},

    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: 3}
]

// function to start the quiz on click of Start Quiz button
function startQuiz() {
    // set/reset quiz variables
    score = 0;    
    timeRemaining = 60;    
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

// show questions (function?)
function showQuestion() {
var qa = document.querySelector.apply('.quizTime');
qa.textContent = '';

var questionDisplay = document.createElement('h2');
questionDisplay.textContent = quizQuestions.question[0];
qa.appendChild(questionDisplay);
    // display each question and answer set from var quizQuestions
    // determine if game is at the end to then show the gameOver div
    // hide the questions div
}

// gameOver
function showGameOver() {
    clearInterval(interval);
        // hide the questions div
        var qa = document.querySelector('.quizTime');
        qa.classList.remove('hidden');            
        // show .gameOver div
        var showGameOver = document.querySelector('.gameOver');
        showGameOver.classList.add('hidden');
}
    // displays final score
    // allow user to enter initials to store high score
    // once entered, hide and then display the highScore screen

// highScore
    // shows numbered list of initials with high scores
    // needs to stop at a certain number of rows, and also make sure that if more high scores
    //  exist than rows, that the rows are in fact showing the highest scores (using local storage)
    // go back button sends user back to startQuiz div
    // clear highscores button clears the list of high scores 

