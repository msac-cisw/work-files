/*
variables.js

var     - only if needed
let     - general usage
const   - only for unchanging constants

variables are CASE SeNSitive

message / Message / MESSAGE = different

use: camelCase - myMessage
     snake_case - my_message
*/ 

let myMessage = "Hello, camelCase.";
console.log(myMessage);

const my_message = "Hello, snake_case.";
console.log(my_message);

// my_message = "New message.";
// this fails because my_message is a const

// Challenge: Create a message that says
// "I love programming in JavaScript!"
// and print that to the console.

let message = "I love programming in JavaScript!";
console.log(message);