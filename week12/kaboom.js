/* 
*  Create JS that place a random bomb
*  icon on the page that goes kaboom
*  when you mouseover
*
*  create a variable for the bomb
*  position absolute, random top and left
*  64px fontsize, back
*  use the appendChild to place it on the page
*/

const bomb = document.createElement('div');
bomb.innerHTML = "🧨";
bomb.style.position = "absolute";
bomb.style.top = Math.floor(Math.random() * 400) + "px"
bomb.style.left = Math.floor(Math.random() * 450) + "px"
bomb.style.fontSize = "64px";
document.body.appendChild(bomb);

function kaboom() {
    document.body.style.background = "red";
    document.body.innerHTML = "<h1>KABOOOOMMMMM!!!!!!!!</h1>";
}

bomb.addEventListener("mouseover", kaboom);