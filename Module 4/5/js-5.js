"use strict";
const url = "https://api.chucknorris.io/jokes/random";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log("Random joke:", data.value);
  })
  .catch(function(error) {
    console.log("Error:", error);
  });
