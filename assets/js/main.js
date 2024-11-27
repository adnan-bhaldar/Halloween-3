/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__shadow', 1.5, {opacity: 0, y: -300, delay: .2})
gsap.from('.home__points', 1.5, {opacity: 0, y: -300, delay: .4})
gsap.from('.home__grass', 1.5, {opacity: 0, y: 300, delay: .2, ease: 'elastic.out(1, .5)'})
gsap.from('.home__pumpkin', 1.5, {opacity: 0, y: -300, delay: .6, ease: 'bounce.out'})
gsap.from('.home__stone', 1.5, {opacity: 0, y: 300, delay: .8, ease: 'elastic.out(1, .5)'})
gsap.from('.home__moon', 1.5, {opacity: 0, y: 300, delay: 1.5, ease: 'elastic.out(1, .5)'})
gsap.from('.home__titles', 1.5, {opacity: 0, y: -300, delay: 1.5, ease: 'elastic.out(1, .5)'})
gsap.from('.home__tree', 1.5, {opacity: 0, y: 300, delay: 2, ease: 'elastic.out(1, .5)'})
gsap.from('.home__data', 1.5, {opacity: 0, y: 200, delay: 2, ease: 'elastic.out(1, .5)'})