import "./styles/style.css"

import { sub, add, getCurrentValue } from "../src/data.js";

const minusBtn = document.querySelector(".negative");
const display = document.querySelector(".num");
const plusBtn = document.querySelector(".positive");

function displayValue(text = getCurrentValue()) {
  display.innerHTML = text;
}

plusBtn.addEventListener("click", () => {
  add();
  displayValue();
});

minusBtn.addEventListener("click", () => {
  sub();
  displayValue();
});
