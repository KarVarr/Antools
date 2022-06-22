"use strict";

const body = document.querySelector('body')
const logoTop = document.querySelector(".footer__logo--img");
const like = document.querySelectorAll(".like");
//slider
const slider = document.querySelector(".slider__slider");
const sliderBtnNext = document.querySelector(".fa-angle-right");
const sliderBtnPrev = document.querySelector(".fa-angle-left");
const activeSLider = document.querySelectorAll(".slider__points--point");
//like btn
const likes = document.querySelectorAll(".like");
//burger  menu
const burgerBtn = document.querySelector('.nav__burger')
const overlay = document.querySelector(".nav__burger--overlay");
const burgerMenu = document.querySelector(".nav__burger--menu");


logoTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

//LIKE BTN
likes.forEach(like => {
  like.addEventListener("click", () => {
    if (like.src.match("img/flat-color-icons_like.svg")) {
      like.src = "img/flat-color-icons_like_pink.svg";
    } else {
      like.src = "img/flat-color-icons_like.svg";
    }
  });
});


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

sliderBtnPrev.addEventListener("click", () => {
  offset = offset + 100;
  if (offset > 100) {
    offset = -100;
  }
  slider.style.left = `${offset}%`;
});

//SLIDER POINTS
activeSLider.forEach(panel => {
  panel.addEventListener("click", () => {
    remove();
    panel.classList.add("activeSlider");
  });
});

function remove() {
  activeSLider.forEach(panel => {
    panel.classList.remove("activeSlider");
  });
}

//BURGER MENU

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault;

    // if (!overlay.getElementsByClassName("active")) {
    //   body.style.overflow = "visible";
    // } else {
    //   body.style.overflow = "hidden";
    // }
    overlay.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    
})

