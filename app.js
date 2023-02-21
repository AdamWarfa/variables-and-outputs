"use strict";
window.addEventListener("click", button);

let number = 0;

function button() {
  document.querySelector("#btn-increment").addEventListener("click", numberUp);
  document.querySelector("#btn-decrement").addEventListener("click", numberDown);
}

function numberUp() {
  console.log("plus-knap");
  console.log(number);
  number += 2000;
  displayNumber();
}
function numberDown() {
  console.log("minus-knap");
  console.log(number);
  number--;
  displayNumber();
}
function displayNumber() {
  document.querySelector("#number").textContent = number;
  let message = `The number is: ${number}`;
  document.querySelector("#message").textContent = message;
}
