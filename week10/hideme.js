// hideme.js

// define vars
const button = document.getElementById("button");
const hideme = document.getElementById("hideme");
const showme = document.getElementById("showme");
const comeback = document.getElementById("comeback");

// create a function to hide the div
function goAway() {
    hideme.style.display = "none";
    button.style.display = "none";
    showme.style.display = "inline";
    comeback.style.display = "inline";
}

// create a function to reset
function comeBack() {
    hideme.style.display = "inline";
    button.style.display = "inline";
    showme.style.display = "none";
    comeback.style.display = "none";
}

// create event listener when the button is clicked
button.addEventListener("click", goAway);
comeback.addEventListener("click", comeBack);