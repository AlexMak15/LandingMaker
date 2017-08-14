var hamburger = document.querySelector(".main-menu-icon");
var topMenu = document.querySelector(".main-menu");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("active");
    topMenu.classList.toggle("top-menu-visible");
    // Do something else, like open/close menu
});

//Parallacs
var rellax = new Rellax('.rellax');