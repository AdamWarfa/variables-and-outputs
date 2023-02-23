"use strict";
window.addEventListener("load", start);

function start() {
  let age = 27;
  if (age < 18) {
    isChild();
  } else if (age < 27) {
    isAdult();
  } else {
    isOld();
  }
}

function isOld() {
  console.log("Bigman Ting");
  document.querySelector("#text").textContent = "Bigman Ting";
}
function isAdult() {
  console.log("Likkle Man");
  document.querySelector("#text").textContent = "Likkle Man";
}
function isChild() {
  console.log("Dusty Yute");
  document.querySelector("#text").textContent = "Dusty Yute";
}
