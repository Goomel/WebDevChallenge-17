//DOM elements 
const elements = {
    burger: document.querySelector('.nav__hamburger'),
    menu: document.querySelector('.nav__list'),
    scrollDown: document.querySelector('.header__scrollDown'),
    firstSection: document.querySelector('.section--our-top'),
    navBar: document.querySelector('.nav'),
}

const firstSectionOffset = elements.firstSection.offsetTop;
const navBarHeight = elements.navBar.clientHeight;

//Show menu
elements.burger.addEventListener('click', () => {
    elements.burger.classList.toggle('nav__hamburger--active');
    elements.menu.classList.toggle('nav__list--active');
})

//Scroll to first section
elements.scrollDown.addEventListener('click', () => {
    window.scrollTo({
        top: firstSectionOffset - navBarHeight,
        left: 0,
        behavior: 'smooth'
    });
})