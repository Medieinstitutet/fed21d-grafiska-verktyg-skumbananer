const cookieButtons = document.querySelectorAll('.cookie-button');
const cookieBanner = document.querySelector('#cookie-banner');
console.log(cookieButtons);
cookieButtons.forEach(button => {
  button.addEventListener('click', () => {
    cookieBanner.classList.add('cookie-banner-read');
  });
});
