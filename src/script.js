//DOM elements 
const elements = {
    burger: document.querySelector('.nav__hamburger'),
    menu: document.querySelector('.nav__list'),
    scrollDown: document.querySelector('.header__scrollDown'),
    firstSection: document.querySelector('.section--our-top'),
    navBar: document.querySelector('.nav'),
    formButton: document.querySelector('.form__button'),
}

const firstSectionOffset = elements.firstSection.offsetTop;
const navBarHeight = elements.navBar.clientHeight;

elements.formButton.addEventListener('click', e => e.preventDefault());

//Show menu
elements.burger.addEventListener('click', () => {
    elements.burger.classList.toggle('nav__hamburger--active');
    elements.menu.classList.toggle('nav__list--active');
    elements.burger.toggleAttribute('aria-label', 'close menu');
})

//Scroll to first section
elements.scrollDown.addEventListener('click', () => {
    window.scrollTo({
        top: firstSectionOffset - navBarHeight,
        left: 0,
        behavior: 'smooth'
    });
})

lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'disableScrolling': true,
    'wrapAround': true
})
