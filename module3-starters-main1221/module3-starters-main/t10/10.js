"use strict";
const form = document.getElementById("source");
const target = document.getElementById("target");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const first = document.querySelector('input[name="firstname"]').value;
  const last = document.querySelector('input[name="lastname"]').value;
  target.textContent = "Your name is " + first + " " + last;
});
