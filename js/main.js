"use strict";

const logoTop = document.querySelector(".footer__logo--img");
const like = document.querySelectorAll(".like");

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
   

