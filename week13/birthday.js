// birthday.js
// define constants
button = document.getElementById('submit');
image = document.getElementById('bdayPic');

// create the function to check
function isBirthday(e) {
    // prevent default behavior
    e.preventDefault();

    // enter the birthday logic
    // set today 
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();

    // console.log(`It's ${month} and ${day}.`)

    // set bday
    const bday = new Date(document.getElementById("bday").value);
    const bd_month = bday.getMonth();
    // the calendar sends the date from 0
    const bd_day = bday.getDate() + 1;

    // console.log(`You chose ${bd_month} and ${bd_day}.`)

    // check if today is your birthday
    if (bd_month == month && bd_day == day) {
        // console.log("Happy birthday! 🎂")
        // change the image
        image.src = "img/birthday_cupcakes.png"
    } else {
        // console.log("It's not your birthday yet. ☹️")
        // change the image
        image.src = "img/sad_puppy.jpg"
    }

    // clear the date
    document.getElementById("bday").value = '';

}

// create event handler
button.addEventListener('click', isBirthday);