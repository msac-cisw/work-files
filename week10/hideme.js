// define variables
let button = document.getElementById('button');
let hideme = document.getElementById('hideme');
let message = document.getElementById('message');

// create a function to make the div go away

function goAway() {
    // hide the "hideme" div
    // console.log("clicked")
    hideme.style.display = "none"
    button.style.display = "none"
    let your_name = prompt("What is your name?")
    let secret_message = `<h2>Hello, ${your_name}!</h2>`
    message.innerHTML = secret_message
}

// create an event listener to call the function when the
// button is clicked

button.addEventListener("click", goAway);