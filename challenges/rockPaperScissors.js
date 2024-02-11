
//This is Rock Paper Scissors Game


//Get and check the user choice 
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else if (
      userInput === "bomb"
    ) { 
      return userInput
    } else {
      return "Invalid input";
    }
  };
  //To check if toLowerCase is working plus the error case
  //console.log(getUserChoice("PAPER"));
  //console.log(getUserChoice("gun"));
  
  //generate computer choice randomly
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
        
      case 1:
        return "paper";
        
      case 2:
        return "scissors";
        
      default:
        return "Not Valid";
    }
  };
  
  //determine the winner
  const determineWinner = (userChoice, computerChoice) => {

    if (userChoice ==='bomb') {
      return "You've won, cuz the bomb always win";
    } else if (userChoice === computerChoice) {
      return "The game is a tie!";
    } else if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    } else if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "The computer won!";
      } else {
        return "You won!";
      }
    } else if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return"The computer won!";
      } else {
        return "You won!";
      }
    }
  };
  //Manual Test Example
  //determineWinner('paper', 'scissors')
  //determineWinner('PAPER', 'paper')
  //determineWinner('rock', 'scissors')

const playGame = () => {
  const userChoice = getUserChoice('bomb')
  const computerChoice = getComputerChoice()
  console.log (`You threw: ${userChoice}`);
  console.log (`The computer threw: ${computerChoice}`);
  console.log (determineWinner(userChoice, computerChoice));
}

playGame()