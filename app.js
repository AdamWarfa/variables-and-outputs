"use strict";
window.addEventListener("click", button);

let firstName = "john";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);

let number = 0;
let text = document.querySelector("#message");

function button() {
  document.querySelector("#btn-increment").addEventListener("click", numberUp);
  document.querySelector("#btn-decrement").addEventListener("click", numberDown);
}

function numberUp() {
  console.log("plus-knap");
  console.log(number);
  number++;
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
  let based = `The number is: ${number} which is BASED`;
  let ten = `The number is: ${number} which is exactly 10!`;
  let cringe = `The number is: ${number} which is CRINGE`;

  if (number > 10) {
    text.textContent = based;
  } else if (number == 10) {
    text.textContent = ten;
  } else {
    text.textContent = cringe;
  }
}
