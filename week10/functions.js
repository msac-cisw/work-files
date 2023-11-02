// functions.js

// These are little programs, or "subprograms"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

// Create a function that greets you by name
// function sayHello(name) {
//     // do stuff here
//     let greeting = "Hi there, " + name +"!"
//     console.log(greeting)
// }
// sayHello("Sammy");

// Ask the user for their name, and then produce a custom greeting
// function sayHello2() {
//     // do stuff here
//     let name = prompt("What's your name?")
//     let greeting = "Hi there, " + name +"!"
//     console.log(greeting)
// }
// sayHello2();

// Create a function that chooses a random greeting
// make a list of greetings
const greetings = [
    "👋 Hi there",
    "Wassup, 🤠?",
    "Hello 😀",
    "Hola!",
    "🍪 Do you like cookies? I like cookies. 🍪",
    "🦁 yo"
];

function randomGreeting(){
    // put our random greeting code
    let i = Math.floor(Math.random() * greetings.length);
    console.log(greetings[i])
}

randomGreeting();