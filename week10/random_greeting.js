// random_greeting.js
const button = document.getElementById("button");
// Get the name
let myName = prompt("What is your name?");
const greetings = [
    `👋 Hi there ${myName}`,
    `Wassup, ${myName} 🤠?`,
    `Hello, ${myName} 😀`,
    `Hola ${myName}!`,
    `🍪 Do you like cookies, ${myName}? I like cookies. 🍪`,
    `🦁 yo ... ${myName}`
];

function randomGreeting() {
    let i = Math.floor(Math.random() * greetings.length);
    let message = greetings[i];
    document.getElementById("greeting").innerHTML = message;
}
randomGreeting();
button.addEventListener("click", randomGreeting);