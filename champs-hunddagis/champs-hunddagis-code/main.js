import './scss/style.scss';

const burgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("navbar");

burgerMenu.addEventListener("click", function() {
    this.classList.toggle("open");
    menu.classList.toggle("open-menu")
});