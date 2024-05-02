/*
functions.js

These are little programs, or "subprograms"
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
*/

// Create a function that greets you by name
// function sayHello(name) {
//     // do your stuff here
//     let greeting = `Hi there, ${name}.`;
//     console.log(greeting);
// }
// sayHello("Sammy Student");

// Ask the user for their name, and then produce a custom greeting
// when the function is called.
function sayHello2() {
    let myName = prompt("What is your name? ");
    let greeting = `Hello, ${myName}!`;
    console.log(greeting);
}
sayHello2();