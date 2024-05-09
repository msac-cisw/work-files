let message = document.getElementById("message");

// Set our birthday manually
let bday = new Date(1996, 4, 8);
let bd_month = bday.getMonth();
let bd_day = bday.getDate();

let today = new Date();
let month = today.getMonth();
let day = today.getDate();

// compare dates and output the message
if ( day == bd_day && month == bd_month ) {
    // change the message to happy birthday
    message.innerHTML = "🎂 Happy Birthday! 🥳"
} else {
    // change the message to it's not ...
    message.innerHTML = "It's not your birthday."
}