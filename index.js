// Number Guessing Game

// Function to start the game
function startGame() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
    let attempts = 0;
    let guessedNumber = null;

    console.log("Welcome to the Number Guessing Game!");
    console.log("I have selected a number between 1 and 100. Can you guess it?");

    // Game loop
    while (guessedNumber !== randomNumber) {
        guessedNumber = parseInt(prompt("Enter your guess: "), 10); // Get user input
        attempts++;

        if (guessedNumber < 1 || guessedNumber > 100 || isNaN(guessedNumber)) {
            console.log("Please enter a valid number between 1 and 100.");
        } else if (guessedNumber < randomNumber) {
            console.log("Too low! Try again.");
        } else if (guessedNumber > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts.`);
        }
    }
}

// Start the game
startGame();
