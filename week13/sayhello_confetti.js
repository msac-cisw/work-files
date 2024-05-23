// sayHello.js

const myForm = document.forms.sayHello;
const message = document.getElementById('message');

// create a function to say hello
function sayHello(e) {
    // prevent the default action
    e.preventDefault();
    message.textContent = `👋 Hi there, ${myForm.yourName.value}!`;
    myForm.yourName.value = '';

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    
}


// add an event listener on the submit button
myForm.addEventListener('submit', sayHello);