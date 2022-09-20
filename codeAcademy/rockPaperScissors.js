const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
 if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error! Please input Rock, Paper, or Scissors.');
};
}

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3) 
  switch (randomNumber) {
    case 0: 
      return 'rock';
    case 1: 
      return 'paper';
    case 2:
      return 'scissors';
  }
}; 

const determineWinner = (userChoice, computerChoice) => { 
  if (userChoice === computerChoice) {
    return 'This game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper'){
      return "Sorry, comptuer won!";
    } else {
      return 'Congratulations, you won!';
    }
  }
   if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return "Sorry, comptuer won!";
    } else {
      return 'Congratulations, you won!';
    }
  }
 if (userChoice === 'scissors') {
    if (computerChoice === 'rock'){
      return "Sorry, comptuer won!";
    } else {
      return 'Congratulations, you won!';
    }
  }

  if (userChoice === 'bomb') {
    return 'Congragulations, you won!';
  }
};

const playGame = () => {
  // User input goes here. Need to turn this into pull from a text field, or button eventually.
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  // console.log('You threw ${userChoice}');
  console.log('The computer threw ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame()

/*
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock'));
*/
