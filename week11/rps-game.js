// rps-game.js for the rps.html game

let computer_choice = '';
let choices = ['r','p','s'];
let results = document.getElementById('results');

// create a function that is called by the button click
function playRPS(player_choice) {
    let message = '';

    // Generate the computer_choice
    let i = Math.floor(Math.random() * 3);
    let computer_choice = choices[i]

    let choices_long = ["rock", "paper", "scissors"];
    message += `<p>The computer chose ${choices_long[i]}.</p>`

    if (player_choice == 'r' && computer_choice == 's' ||
        player_choice == 'p' && computer_choice == 'r' ||
        player_choice == 's' && computer_choice == 'p'
    ) { 
        message += `<p class="w3-green w3-large w3-center">You win! 😀</p>`
    } else if ( player_choice == computer_choice ) {
        message += `<p class="w3-yellow w3-large w3-center">You tied 💩</p>`
    } else {
        message += `<p class="w3-red w3-large w3-center">The computer wins</p>`
    }
    results.innerHTML = message;

}