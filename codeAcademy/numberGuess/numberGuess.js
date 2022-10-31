let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
 if (winner === 'human') {
   humanScore++;
  if (winner === 'computer') {
    computerScore++;
  }
 }
}

const advanceRound = () => currentRoundNumber++;

