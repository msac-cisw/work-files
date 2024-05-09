// libmad.js (not madlibs)

// Create a program that asks for users to input four words
// and then make a silly poem!

function libmads() {
    let welcome = "Welcome to libmads!\n";
    console.log(welcome);

    let adj1 = prompt("Enter an adjective: ");
    let adj2 = prompt("Enter ANOTHER adjective: ");
    let adj3 = prompt("Enter the LAST adjective: ");
    let noun = prompt("Enter an plural noun: ");

    let poem = `Roses are ${adj1}\n`;
    poem += `Violets are ${adj2}\n`;
    poem += `${noun} are ${adj3}\n`;
    poem += `and so are you!`;

    console.log(poem);
}
libmads()