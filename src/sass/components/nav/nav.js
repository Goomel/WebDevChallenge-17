const burger = document.querySelector('.nav__hamburger');
const menu = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('nav__hamburger--active');
    menu.classList.toggle('nav__list--active');
})