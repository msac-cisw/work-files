// darkmode.js

function toggleDarkMode(e) {
    // e.keyCode for d = 68
    if (e.keyCode == 68) {
        document.body.classList.toggle('darkmode');
    }
}

document.onkeydown = toggleDarkMode;