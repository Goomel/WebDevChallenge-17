//DOM elements 
const elements = {
    burger: document.querySelector('.nav__hamburger'),
    menu: document.querySelector('.nav__list'),
    scrollDown: document.querySelector('.header__scrollDown'),
    firstSection: document.querySelector('.section--our-top'),
    navBar: document.querySelector('.nav'),
    formButton: document.querySelector('.form__button'),
    mapGroup: document.querySelector('.map-group'),
    mapBgc: document.querySelector('.map-group__background'),
    map: document.querySelector('.map'),
}

const firstSectionOffset = elements.firstSection.offsetTop;
const navBarHeight = elements.navBar.clientHeight;
const bgc = elements.mapBgc;

//Prevent default form button click
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

//Show and hide map title
elements.mapGroup.addEventListener('mouseover', () => {
    if (!bgc.classList.contains('map-group__background--hidden')) {
        bgc.classList.add('map-group__background--visuallyhidden');
        bgc.addEventListener('transitionend', () => {
            bgc.classList.add('map-group__background--hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        });
    }
})
elements.map.addEventListener('mouseleave', () => {
    if (bgc.classList.contains('map-group__background--hidden')) {
        bgc.classList.remove('map-group__background--hidden');
        setTimeout(() => {
            bgc.classList.remove('map-group__background--visuallyhidden');
        }, 50);
    }
})

//Lightbox - gallery options
lightbox.option({
    'resizeDuration': 300,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'disableScrolling': true,
    'wrapAround': true
})

