// darkmode js

// create a variable for the button
button = document.getElementById("button");

// create the toggle function
function toggleDarkMode() {
    // console.log("It worked!");
    document.body.classList.toggle("darkmode");
    toggleButton();
}

// create the toggleButton function to change
// the button text
function toggleButton() {
    // if the class darkmode is there, then ...
    if (document.body.classList.contains("darkmode")) {
        button.innerText = "Enable Daymode";
    } else {
        button.innerText = "Enable Darkmode";
    }
}

// create an event listener on the button
button.addEventListener("click", toggleDarkMode);
window.onload = toggleButton();