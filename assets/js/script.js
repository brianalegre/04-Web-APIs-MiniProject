// Variables 

var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".timer-count");

// Initial Time to Complete Game
var secondsLeft = 10;

var words = ["Brian", "Alegre", "Kevin", "Allec", "Phillip"]



// Function for starting the game
startButton.addEventListener("click", setTime)    // Need to definte startGame()


//  Start Timer
function setTime() {
// Sets interval in variable
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    // Calls function to create and append image
    }

}, 1000);
}




