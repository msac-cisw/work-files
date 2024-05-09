// Rock, Paper, Scissors - the easy way
// Run this in your cli

let greeting = `Welcome to Rock 🪨, Paper 📄, Scissors ✂️ - a game of chance 🎲. 

I'll pick one and then you pick one. Here are the rules:

Rock beats Scissors
Paper beats Rock
Scissors beats Paper\n`
console.log(greeting)

// Generate the computer_choice
let i = Math.floor(Math.random() * 3);
let choices = ['r','p','s'];
let computer_choice = choices[i]

// Get the players choice
let player_choice = prompt("Choose: Rock, Paper, or Scissors (r/p/s): ");
player_choice = player_choice[0].toLowerCase();       // gets the first letter

// Log the choices
console.log(`You picked: ${player_choice}`)
console.log(`Computer picked: ${computer_choice}`)

if (player_choice == 'r' && computer_choice == 's' ||
    player_choice == 'p' && computer_choice == 'r' ||
    player_choice == 's' && computer_choice == 'p'
) {
    // you win
    console.log("You win!")
} else if ( player_choice == computer_choice ) {
    // check for a tie
    console.log("It's a tie!")
} else {
    // computer wins
    console.log("Computer wins.")
}
console.log("Thanks for playing!")