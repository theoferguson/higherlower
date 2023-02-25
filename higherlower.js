let maxNumber = runPrompt();

let paragraph = document.querySelector("p");
paragraph.innerHTML = `Guess a number between 1 and ${maxNumber}`;

let num = Math.floor(Math.random() * maxNumber) + 1;

console.log(num);

let previousGuesses = []