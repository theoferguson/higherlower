function runPrompt() {
    let number = prompt("What should the maximum number be?");
    while (number <= 0 || isNaN(number)) {
        number = prompt("The input must be a number greater than 0. Please enter a maximum number.")
    };
    return Math.round(number);
};

function do_guess() {
    let guess = Number(document.getElementById("guess").value);

    let message = document.getElementById("message");

    if(guess == num) {
        previousGuesses.push(guess)
        message.innerHTML = `You got it! ${guessMessage()}`;
    }
    else if (isNaN(guess)) {
        message.innerHTML = "That is not a number!"
    }
    else if (previousGuesses.find(el => el === guess)) {
        message.innerHTML = "That number has already been guessed, try again."
    }
    else if (guess <= 0 || guess > maxNumber) {
        message.innerHTML = "That number is not in range, try again."
    }
    else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        previousGuesses.push(guess)
    }
    else {
        message.innerHTML = "No, try a higher number.";
        previousGuesses.push(guess)
    }
};

function guessMessage() {
    if (previousGuesses.length === 1) {
        return `It took you ${previousGuesses.length} try and your guess was ${previousGuesses[0]}`;
    } else {
        return `It took you ${previousGuesses.length} tries and your guesses were ${previousGuesses.join(', ')}`;
    };
};