// tip_big.js

// assign variables
let form = document.forms.amount;
let submit = document.getElementById("submit");
let results = document.getElementById("results");
let startOver = document.getElementById("startOver");

let billTotal = 0;
let tipAmount = 0;
let total = 0;

// create the tipBig function
function tipBig(e) {
    e.preventDefault();

    // get the billTotal from the form id="billTotal"
    billTotal = Number(form.billTotal.value);
    tipAmount = billTotal * 0.2;
    total = billTotal + tipAmount;

    // hide the form
    form.style.display = "none";

    // add details to the results element
    results.innerHTML = "The bill is $";
    results.innerHTML += billTotal.toFixed(2);
    results.innerHTML += "<br>";
    results.innerHTML += "The tip is $";
    results.innerHTML += tipAmount.toFixed(2);
    results.innerHTML += "<br><hr>";
    results.innerHTML += `The total is <b>$${total.toFixed(2)}</b>`;

    // show the results and the start over button
    results.style.display = "block";
    startOver.style.display = "block";

}

// create the reload function clear the inputs and starts over
function reload() {
    window.location.reload();
    // clear the value of the billTotal input
    form.billTotal.value = "";
}

// add event handlers
submit.addEventListener("click", tipBig);
startOver.addEventListener("click", reload);