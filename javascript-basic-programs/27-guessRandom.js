function guessNumber() {
  const randomNumber = Math.floor(Math.random() * 10 + 1);
  let guess;

  while (guess !== randomNumber) {
    guess = Number(prompt("Guess a number:"));

    if (guess === randomNumber) {
      console.log("🎉 Correct! You guessed the number.");
    } else {
      console.log("❌ Wrong guess. Try again.");
    }
  }
}

guessNumber();
