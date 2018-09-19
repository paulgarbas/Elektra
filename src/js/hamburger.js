"use strict";

let hamburger = document.querySelector(".hamburger");
let clicked = false;

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
});