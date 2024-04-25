// quotes.js
// Pick a random quote to display

const quotes = [
    "You Don't Have Time To Think Up There. You Think, You're Dead. -Maverick",
    "The Pentagon Sees To It That I Know More Than You. -Charlie",
    "That Was Some Of The Best Flying I've Seen To Date —Right Up To The Part Where You Got Killed. - Jester",
    "Remember Boys, No Points For Second Place. -Slider",
    "You're Not Going To Be Happy Unless You're Going Mach 2 With Your Hair On Fire. -Charlie",
    "This Is What I Call A Target-Rich Environment. -Maverick",
    "We didn't slide into Cougar's spot. It was ours, OK? -Goose"
]

function getQuote() {
    // generate a random number
    let x = Math.floor(Math.random() * quotes.length);
    let random_quote = quotes[x];

    // select the element with the id of quote
    let quote = document.getElementById("quote");

    // change the inner html of the element
    quote.innerHTML = random_quote;
}

getQuote();
