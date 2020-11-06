// create a var countdownTime = 60; to create the timer that conditionally hides



// I need some functions here, but not sure what yet.  Will need to loop over questions/answers, 
// and also conditionally hide divs

// Timer

var timerEL = document.getElementById("timer");
var startingTime = 60
var interval


function showTimer() {
    var startingTime = 60;

        interval = setInterval(function() {
        timerEL.textContent = "Timer: " + startingTime;
        startingTime--;
        
        if (startingTime <= 0) {
            timerEL.textContent = "Timer: 00";
            console.log("You are at zero");
            clearInterval(interval);
        }
    }, 1000);
}

showTimer();


// create variables to hold the questions and answers and identify the answers that are true/false

var quizQuestions = [
    {question: "Commonly used data types DO NOT include:", answers: ["strings", ,"booleans", "alerts", "numbers"], correctAnswer: 2}
    {question: "q2", answers: []}, 
    {question: "q3", answers: []},
    {question: "q4", answers: []}
]

// function to start the quiz
function startQuiz () {
    // set/reset score to zero
    score = 0;

    // start timer (set to 60 seconds)
    startingTime = 60;

    // display the first set of questions/answers
    questionIndex = 0;
    
    // hide the .startQuiz div
    var quizStart = document.querySelector(".startQuiz");
    quizStart.classList.add(".hidden");




}
    // on click of <start quiz> button
    
    
    
    // hide the .startQuiz div

// show questions (function?)
    // display each question and answer set from var quizQuestions
    // determine if game is at the end to then show the gameOver div
    // hide the questions div

// gameOver
    // displays final score
    // allow user to enter initials to store high score
    // once entered, hide and then display the highScore screen

// highScore
    // shows numbered list of initials with high scores
    // needs to stop at a certain number of rows, and also make sure that if more high scores
    //  exist than rows, that the rows are in fact showing the highest scores (using local storage)
    // go back button sends user back to startQuiz div
    // clear highscores button clears the list of high scores 

