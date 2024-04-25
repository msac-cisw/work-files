// rainbow.js

// Create a list of colors and then choose a
// random color

// list of colors to change the background
const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
];

// pick a random number
// use Math.floor to round DOWN to 0
// let x = Math.floor(Math.random() * 7);
// let color_choice = colors[x];

// print your choice to the console
// console.log("The color is", color_choice);

// Create a function to change the background
// color to color_choice

function changeBackgroundColor() {
    let x = Math.floor(Math.random() * 7);
    let color_choice = colors[x];
    console.log("The color is", color_choice);
    document.body.style.backgroundColor = color_choice;
}

changeBackgroundColor();