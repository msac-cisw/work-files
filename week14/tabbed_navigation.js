// tabbed_navigation.js

// Create a function that will hide the cities
// and show the selected city

function openCity(evt, cityName) {
    // create variables
    let i;          // iterator
    let tablinks = document.getElementsByClassName("tablinks");
    let city = document.getElementsByClassName("city");

    // hide all the cities by running through a loop
    for ( i = 0; i < city.length; i++ ) {
        city[i].style.display = "none";
    }

    // iterate through the tablinks and remove the class current
    for ( i = 0; i < tablinks.length; i++ ) {
        tablinks[i].className = tablinks[i].className.replace("current","");
    }

    // show the selected city
    document.getElementById(cityName).style.display = "block";

    // Make the selected tab have the class current
    evt.currentTarget.classList.toggle("current");
}