// strings.js

// The String object is used to represent and manipulate a sequence of characters. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

let myString = "This and " + "this";

typeof myString         // "string"
myString.length         // 13

myString = myString + " and this!";
myString = myString + " and this!";

myString.toUpperCase();
myString.toLowerCase();

// manipulate a sentence
let sentence = "I love programming";
sentence.length             // 18
sentence += "!";
sentence.length             // 19
sentence.indexOf("love");   // 2

// use a template literal for a custom greeting
// template literals use the backtick ` and not the quotes "
// use the ${VARIABLE} format for each variable

let your_name = "Sammy";
const adj1 = [
    "great",
    "nice",
    "wonderful",
    "cool"
]
let i = Math.floor(Math.random() * adj1.length)
let random_adj = adj1[i];
let greeting = `👋 Hi there, ${your_name}, it's ${random_adj} to see you!`;
console.log(greeting);















