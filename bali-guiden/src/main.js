const cookieButtons = document.querySelectorAll('.cookie-button');
const formButton = document.querySelector('#newsletter button');
const hamburgerButton = document.querySelector('#hamburger-button');
const closeButton = document.querySelector('#close-button');
const cookieBanner = document.querySelector('#cookie-banner');
const nav = document.querySelector('nav');

formButton.disabled = true;

cookieButtons.forEach(button => {
  button.addEventListener('click', () => {
    cookieBanner.style.display = 'none';
  });
});

hamburgerButton.addEventListener('click', () => {
  nav.style.transform = 'translateX(0)';
});

closeButton.addEventListener('click', () => {
  nav.style.transform = 'translateX(100%)';
});
