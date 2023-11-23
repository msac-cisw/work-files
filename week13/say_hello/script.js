const my_form = document.forms.sayHello;
const message = document.getElementById("message");

// create the function to say hello
function sayHello(e) {
    // prevent the default form action
    e.preventDefault();
    message.textContent = `👋 Hi there, ${my_form.yourName.value}!`
}

// event listener
my_form.addEventListener('submit', sayHello);