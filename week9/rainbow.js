// rainbow.js
// pick a random color from a list of colors

/* 
    lists are counted starting at 0

    0   1      2      3
    red orange yellow green
*/

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
];

// declare the variable for color choice
let color_choice;

// pick a random number for the color
let x = Math.floor(Math.random() * 7);
color_choice = colors[x];

// print the color choice
console.log(color_choice);




