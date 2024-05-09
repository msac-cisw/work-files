// birthday.js
// Is today your birthday?
// Determine whether today is your birthday or not
// Display an appropriate message
// JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC
//  0   1   2   3   4   5   6   7   8   9  10   11

// Set our birthday manually
let bday = new Date(1996, 4, 8);
let bd_month = bday.getMonth();
let bd_day = bday.getDate();

let today = new Date();
let month = today.getMonth();
let day = today.getDate();

// Compare the month and day
// If it's the same, Happy Birthday

if ( day == bd_day && month == bd_month ) {
    console.log("🎂 Happy Birthday! 🥳")
} else {
    console.log("It's not your birthday.")
}
