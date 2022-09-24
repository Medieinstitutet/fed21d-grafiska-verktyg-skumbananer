const cookieButtons = document.querySelectorAll('.cookie-button');
const burgerButton = document.querySelector('.hamburger-button');
const closeButton = document.querySelector('.close-button');
const cookieBanner = document.querySelector('.cookie-banner');
const nav = document.querySelector('nav');

cookieButtons.forEach(btn =>
  btn.addEventListener('click', () => (cookieBanner.style.display = 'none'))
);

burgerButton.addEventListener('click', () => nav.classList.toggle('is-active'));

closeButton.addEventListener('click', () => nav.classList.toggle('is-active'));
