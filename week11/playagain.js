// Use a while loop to "play again?"
let play_again = 'y';
let games_played = 0;
while (play_again == 'y'){
    // add 1 to the games_played
    games_played++
    // display the number of games played
    console.log("Games played: ", games_played)
    // ask to play again
    play_again = prompt("Play again? y/n ");

    // check whether play again y/n
    if (play_again == 'y') {
        // continue the while loop
        continue
    } else {
        // they said no, so quit already
        console.log('quitting');
        play_again = 'n';
    }
}
console.log("goodbye")