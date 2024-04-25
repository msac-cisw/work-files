/* 
random_num.js
Generate some random numbers.
*/

// Generate a random number between 0 and 1
let x = Math.random();
// console.log("Random number between 0 and 1");
// console.log(x);

// Generate a random number between 1 and 6
// raise the number UP to the nearest integer
// use Math.ceil()

// x = Math.ceil(Math.random() * 6);
// console.log("Random number between 1 and 6")
// console.log(x);

// use an iterator to "roll" four dice
console.log("Let's roll the dice!");
let i = 0;
while (i < 4) {
    // do this code
    x = Math.ceil(Math.random() * 6);
    console.log("Roll:", i+1);
    console.log(x);
    i = i + 1;
}
console.log("Thank you for playing.");