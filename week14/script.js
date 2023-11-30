// assign variables
let form = document.forms.amount;
let submit = document.getElementById("submit");
let results = document.getElementById("results");
let startOver = document.getElementById("start_over");

let bill_amount = 0;
let tip_amount = 0;
let before_tax = 0;
let tax_amt = 0;
let total = 0;

// create function
function tipBig(e) {
    e.preventDefault();

    // get the bill_amount
    bill_amount = Number(form.bill_total.value);
    before_tax = bill_amount / 1.0975;
    tip_amount = before_tax * 0.2;
    tax_amt = bill_amount * 0.0975;

    total = before_tax+ tax_amt + tip_amount;

    // enter the billing details in the results
    results.innerHTML = "The tip is $";
    results.innerHTML += tip_amount.toFixed(2);
    results.innerHTML += "<br>";
    results.innerHTML += "The total is $";
    results.innerHTML += total.toFixed(2);

    // show the start over button
    startOver.style.display = "block";
}

function reload() {
    window.location.reload();
}

// add event handlers
submit.addEventListener("click", tipBig);
startOver.addEventListener("click", reload);

// when the page loads: clear input & results
// hide the results
window.addEventListener("load", onload = () => {
    // set form value to ""
    form.bill_total.value = "";
    results.innerHTML = "";
    startOver.style.display = "none";
});