// Rock, Paper, Scissors

let greeting = `Welcome to Rock 🪨, Paper 📄, Scissors ✂️ - a game of chance 🎲. 

I'll pick one and then you pick one. Here are the rules:

Rock beats Scissors
Paper beats Rock
Scissors beats Paper\n`
console.log(greeting)

// Have the computer pick
let choices = ['r','p','s'];
let x = Math.floor(Math.random() * 3);
let computer_choice = choices[x];

// ask the player to pick one
let player_choice = prompt("Choose Rock, Paper, or Scissors (r/p/s):");

// display the results
console.log(`The computer picked ${computer_choice}`);
console.log(`You picked ${player_choice}`);

// figure out win/lose/tie
if    (player_choice == 'r' && computer_choice == 's'
    || player_choice == 'p' && computer_choice == 'r'
    || player_choice == 's' && computer_choice == 'p') {
        console.log("You win!")
} else if (player_choice == computer_choice) {
    console.log("It's a tie.")
} else {
    console.log("Computer wins.")
}

console.log("Thanks for playing 👋");