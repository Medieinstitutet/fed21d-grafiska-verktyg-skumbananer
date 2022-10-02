import './scss/style.scss';

const burgerMenu = document.getElementById("hamburger-menu");
const menu = document.getElementById("navbar");
const acceptBtn = document.getElementById("accept-btn");
const rejectBtn = document.getElementById("reject-btn");
const cookieBanner = document.getElementById("cookie-banner");

// function closeCookieBanner() {
//     cookieBanner.classList.toggle("close-cookie-banner");
// };

burgerMenu.addEventListener("click", function() {
    this.classList.toggle("open");
    menu.classList.toggle("open-menu");
});

acceptBtn.addEventListener("click", closeCookieBanner);
rejectBtn.addEventListener("click", closeCookieBanner);

function closeCookieBanner() {
    cookieBanner.classList.toggle("close-cookie-banner");
};