let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

};
document.querySelectorAll('.contact .contact2 .contact2-child h3').forEach(quesionsbox => {
quesionsbox.onclick=()=>{
  quesionsbox.parentElement.classList.toggle('active');
}  
});
var swiper = new Swiper(".home-slider", {
  loop:true,
  effect: "coverflow",
  spaceBetween: 30,
  grabCursor: true,
  coverflowEffect: {
     rotate: 50,
     stretch: 0,
     depth: 100,
     modifier: 1,
     slideShadows: false,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides: true,
    grabCursor: true,
    coverflowEffect: {
       rotate: 0,
       stretch: 0,
       depth: 100,
       modifier: 2,
       slideShadows: true,
    },
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
 });
 var swiper = new Swiper(".reviews-slider", {
  loop:true,
  slidesPerView: "auto",
  grabCursor: true,
  spaceBetween: 30,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     768: {
       slidesPerView: 1,
     },
     991: {
       slidesPerView: 2,
     },
  },
});