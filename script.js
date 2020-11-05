// create a var countdownTime = 60; to create the timer that conditionally hides

// create variables to hold the questions and answers and identify the answers that are true/false

// I need some functions here, but not sure what yet.  Will need to loop over questions/answers, 
// and also conditionally hide divs

// Timer

var timerEL = document.getElementById("timer");
var startingTime = 60


function showTimer() {
    var startingTime = 60;
    var interval = setInterval(function() {
        timerEL.textContent = "Timer: " + startingTime;
        startingTime--;
        
        if (startingTime <= 0) {
            timerEL.textContent = "Timer: 00";
            console.log("You are at zero");
        }
    }, 1000);
}

showTimer();