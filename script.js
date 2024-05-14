function guess(number) {
  if (number == hiddenNumber) {
    alert("you have guessed right");
  }

  if (number < hiddenNumber) {
    hint.innerText = "you guesed too low";
  }

  if (number > hiddenNumber) {
    hint.innerText = "you guessed too high";
  }

  attempts.innerText = "Number of attempts: " + ++numberOfAttempts
}
let hiddenNumber = Math.ceil(Math.random() * 10);
let numberOfAttempts = 0;

let guessInput = document.getElementById("guess");
let guessButton = document.getElementById("GuessButton");
let hint = document.getElementById("hint");
let attempts = document.getElementById("attempts");
let reset = document.getElementById("reset");


guessButton.onclick = function () {
  guess(guessInput.value);
};
reset.onclick = function (){
    window.location.reload ()
}
