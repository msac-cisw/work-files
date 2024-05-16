// keycodes.js
// Write a function that will log the key code
let result = document.getElementById("result");

function logKeyCode(e) {
    // console.log("You pressed: ", e.key, e.keyCode)
    result.innerText = "Key: " + e.key + "\n"
    result.innerText += "keyCode: " + e.keyCode;
}

document.onkeydown = logKeyCode;