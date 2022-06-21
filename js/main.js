"use strict";

const logoTop = document.querySelector(".footer__logo--img");
const like = document.querySelectorAll(".like");
//slider
const slider = document.querySelector('.slider__slider')
const sliderBtnNext = document.querySelector('.fa-angle-right')
const sliderBtnPrev = document.querySelector('.fa-angle-left')
const activeSLider = document.querySelectorAll(".slider__points--point");

logoTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

for(let likes of like)
likes.addEventListener('click', function() {
     if (likes.hasAttribute("src", `img/flat-color-icons_like.svg`)){
        likes.setAttribute("src", `img/flat-color-icons_like_pink.svg`)
    } else {
        likes.setAttribute("src", `img/flat-color-icons_like.svg`);
    }
})
   
//SLIDER
let offset = 0;

sliderBtnNext.addEventListener("click", () => {
  offset = offset - 100;
  if (offset < -100) {
    offset = 100;
  }
  slider.style.left = `${offset}%`;


//---------
//   activeSLider.forEach(panel => {

//       remove();
//       panel.classList.add("activeSlider");
    
//   });

//   function remove() {
//     activeSLider.forEach(panel => {
//       panel.classList.remove("activeSlider");
//     });
//   }
//----------


});

sliderBtnPrev.addEventListener('click', () => {
    offset = offset + 100;
    if(offset > 100) {
        offset = -100;
    }
    slider.style.left = `${offset}%`;
})

//SLIDER POINTS
activeSLider.forEach(panel => {
    panel.addEventListener("click", () => {
      remove();
      panel.classList.add("activeSlider");
    });
})

function remove () {
    activeSLider.forEach(panel => {
        panel.classList.remove('activeSlider')
    })
}