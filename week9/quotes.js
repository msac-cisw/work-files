// Create a function that will change the quote
// and the source when the page is loaded
// Bonus: change the quote with a button push

function getQuote() {
    const quotes = [
        "You Don't Have Time To Think Up There. You Think, You're Dead",
        "The Pentagon Sees To It That I Know More Than You.",
        "That Was Some Of The Best Flying I've Seen To Date — Right Up To The Part Where You Got Killed.",
        "Remember Boys, No Points For Second Place.",
        "You're Not Going To Be Happy Unless You're Going Mach 2 With Your Hair On Fire.",
        "This Is What I Call A Target-Rich Environment."
    ]
    const sources = [
        "Maverick",
        "Charlie",
        "Jester",
        "Slider",
        "Charlie",
        "Maverick"
    ]

    // grab the h1 with the id of quote
    let quote = document.getElementById('quote');

    // grab the p with id of source
    let source = document.getElementById('source');

    // generate a random number
    // between 0 and the length of the array
    let i = Math.floor(Math.random() * quotes.length)

    // we can rewrite the innerHTML
    quote.innerHTML = quotes[i];
    source.innerHTML = sources[i];
}

getQuote();