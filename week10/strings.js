/* Strings.js

The String object is used to represent and manipulate a sequence of characters. 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/

let myString = "This and " + "this";
console.log(myString);
console.log(typeof myString);
console.log(myString.length)

myString = myString + " and this!";
myString = myString + " and this 🤙";
console.log(myString);

console.log(myString.toUpperCase());    // THIS AND THIS ...
console.log(myString.toLowerCase());    // this and this ...

// use a template literal for a custom greeting
// template literals use the backtick ` and not the quotes "
// use the ${VARIABLE} format for each variable

let yourName = "Sammy";
// let greeting = `👋 Hi there, ${yourName} 🤙`;
// console.log(greeting);
const adj1 = [
    "distateful",
    "good",
    "terrific",
    "weird",
    "horrible",
    "slightly discomforting"
]
let i = Math.floor(Math.random() * adj1.length);
let myAdj = adj1[i];
let greeting = `👋 Hi there, ${yourName}, it's ${myAdj} to see you.`;
console.log(greeting);