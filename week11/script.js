// birthday webpage
let message = document.getElementById("message");
let bday_pic = document.getElementById("bday_pic");

// change this manually!!!!
let bday = new Date(1996, 10, 9);
let bd_month = bday.getMonth();
let bd_day = bday.getDate();

let today = new Date();
let month = today.getMonth();
let day = today.getDate();

// check if the month and day are the same
if ( day == bd_day && month == bd_month) {
    message.innerHTML = "🎂 Happy Birthday! 🥳";
    bday_pic.src = "img/birthday_cupcakes.png";
} else {
    message.innerHTML = "It's not your birthday.";
    bday_pic.src = "img/sad_puppy.jpg";
}