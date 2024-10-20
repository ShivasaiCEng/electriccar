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

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
 
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    /* Add a class if the bottom offset is greater than 50 of the viewport  */
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
let swiperPopular = new Swiper(".popular__container", {
     loop:true,
     spaceBetween:24,
     slidesPerView:'auto',
      grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  breakpoints: {
   
    768:{
      slidesPerView: 3,
    },
    1024:{
      spaceBetween: 48,
    },
  },
});
/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
  selectors: {
      target: '.featured__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active featured */ 
const linkFeatured=document.querySelectorAll('.featured__item')
function activeFeatured(){
  linkFeatured.forEach(l=> l.classList.remove('active-featured') )
this.classList.add('active-featured')
}
linkFeatured.forEach(l=> l.addEventListener('click',activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  //reset:true
})
sr.reveal('.home__title, .popular__container, .features__img, featured__filters ')
sr.reveal('.home__subtitle',{delay:500})
sr.reveal('.home__elec',{delay:600})
sr.reveal('.home__img',{delay:800})
sr.reveal('.home__car-data',{delay:900,interval:100,origin:'botttom'})
sr.reveal('.home__button',{delay:1000,origin:'botttom'})
sr.reveal('.about__group',{origin:'left'})
sr.reveal('.about__data, ',{origin:'right'})
sr.reveal('.features__map',{ delay:600, origin:'bottom'})
sr.reveal('.features__card',{interval:300 })
sr.reveal('.featured__card',{interval:100 })