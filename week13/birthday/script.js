// make a variable for the button
const button = document.getElementById("submit");

function check_birthday() {
    // test code
    // console.log("button pressed");

    // check birthday code
    const today = new Date();
    const month = today.getMonth();
    const day = today.getDate();

    // grab the date value
    let pick = document.getElementById("bday").value;
    let bday = new Date(pick)
    let bd_month = bday.getMonth();
    let bd_day = bday.getDate();

    // run a test
    // console.log(month, day);
    // console.log(bd_month, bd_day);

    // use if/else to determine if birthday
    if ( bd_month == month && bd_day == day ) {
        // change background to cake
        document.body.style.backgroundImage = "url('img/cupcakes.png')"
    } else {
        // change background to sad puppies
        document.body.style.backgroundImage = "url('img/sad_puppy.jpg')"
    }

    // hide the input text
    let input = document.getElementById("input");
    input.classList.add("hide");

}

// add an event listener
button.addEventListener('click', check_birthday);