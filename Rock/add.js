// {
// const getUserChoice = userInput => {

//   userInput = userInput.toLowerCase();

//   if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
//     return userInput;
//   } else {
//     return console.log('Error');
//   }
// };

// const getComputerChoice = () => {
//   let randomNumber = Math.floor(Math.random() * 3);
//   switch (randomNumber) {
//     case 0:
//       return 'rock';
//       break;
//     case 1:
//       return 'paper';
//       break;
//     case 2:
//       return 'scissors';
//       break;
//   }
// };

// const determineWinner = (userChoice, computerChoice) => {
//   if (userChoice === computerChoice) {
//     return 'It is a tie';
//   };
//   if (userChoice === 'rock') {
//     if (computerChoice === 'paper') {
//       return 'The computer won!';
//     } else {
//       return 'You won!';
//     }
//   };
//   if (userChoice === 'paper') {
//     if (computerChoice === 'scissors') {
//       return 'The computer won!';
//     } else {
//       return 'You won!';
//     }
//   };
//   if (userChoice === 'scissors') {
//     if (computerChoice === 'rock') {
//       return 'The computer won!';
//     } else {
//       return 'You won!';
//     }
//   }

// };

// const playGame = () => {
//   let userChoice = getUserChoice('rock');
//   let computerChoice = getComputerChoice();
//   console.log('You threw: ' + userChoice);
//   console.log('The computer threw: ' + computerChoice);
//   console.log(determineWinner(userChoice, computerChoice))
// };
// playGame();
// }

const myArray = [1, 2, 3];
const yourArray = [11, 22, 33];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray.indexOf(i) % 2 === 1) {
     myArray.push(yourArray[j]);
    }
  }
};
console.log(myArray);
