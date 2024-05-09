// Flow Control
// Control Flows

// If statements
// https://www.w3schools.com/js/js_if_else.asp

// if (condition) {
//      code here ...
// }

let likes_pineapple = false;

if (likes_pineapple) {
    console.log("🍍🍍🍕🍕")
} else {
    console.log("🧀🧀🍕🍕")
}

// While Loops
// https://www.w3schools.com/js/js_loop_while.asp

// while (condition) {
//      some code ...
// }
let i = 1;
while (i <= 10) {
    console.log("I love MSAC 💜 - " + i);
    i = i + 1;
  }

// for loop
// execute a loop shorter!

// countdown to a spaceX launch
// https://www.w3schools.com/js/js_loop_for.asp

for ( let i = 10; i > 0; i = i -1 ) {
    console.log(i)
}
console.log("Blast off! 🚀🚀🚀")

// for .. in
// iterate through a list
// https://www.w3schools.com/js/js_loop_forin.asp

// iterate through a list of a students
const students = [  "Sammy",
                    "Chris",
                    "Candace",
                    "Finneas",
                    "Furb"];
for ( let i in students ) {
    console.log(`Hi, ${students[i]}!`)
}

// Date Objects
// https://www.w3schools.com/js/js_dates.asp
// JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC
//  0   1   2   3   4   5   6   7   8   9  10   11

const d = new Date();
console.log(d.getFullYear());
console.log(d.getDate());
console.log(d.getMonth());
console.log(d);

