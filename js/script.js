let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
}
document.querySelector('#close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
}
// ----------
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};

// faq section in about page

document.querySelectorAll('.accordion-container .accordion').forEach(accordion=>{
    accordion.onclick = () =>{
      accordion.classList.toggle('active');
    }
});

// 












// swiper-header page
var swiper = new Swiper(".home-slider", {
    loop:true,
    grabcursor:true,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// swiper-review page
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,

    grabcursor:true,
    
   breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });