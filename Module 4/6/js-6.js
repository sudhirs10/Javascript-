"use strict";

const form = document.getElementById("joke-form");
const input = document.getElementById("query");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchText = input.value.trim();
  if (searchText === "") {
    resultsDiv.innerHTML = "Please type a search word.";
    return;
  }
  const url = "https://api.chucknorris.io/jokes/search?query="
              + encodeURIComponent(searchText);
  resultsDiv.innerHTML = "";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const jokes = data.result;

      if (jokes.length === 0) {
        resultsDiv.textContent = "No jokes found.";
        return;
      }
      for (let i = 0; i < jokes.length; i++) {
        const jokeText = jokes[i].value;
        const article = document.createElement("article");
        const p = document.createElement("p");
        p.textContent = jokeText;
        article.appendChild(p);
        resultsDiv.appendChild(article);
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
      resultsDiv.textContent = "Something went wrong.";
    });
});
