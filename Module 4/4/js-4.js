"use strict";

const form = document.getElementById("search-form");
const input = document.getElementById("query");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchText = input.value.trim();

  if (searchText === "") {
    resultsDiv.innerHTML = "Please type a series name.";
    return;
  }
  const url = "https://api.tvmaze.com/search/shows?q="
              + encodeURIComponent(searchText);
  resultsDiv.innerHTML = "";

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

      if (data.length === 0) {
        resultsDiv.textContent = "No TV series found.";
        return;
      }

      for (let i = 0; i < data.length; i++) {
        const tvShow = data[i].show;
        const article = document.createElement("article");
        const title = document.createElement("h2");
        title.textContent = tvShow.name;
        article.appendChild(title);
        if (tvShow.url) {
          const link = document.createElement("a");
          link.href = tvShow.url;
          link.target = "_blank";
          link.textContent = "Details";
          article.appendChild(link);
        }
        let imageUrl;
        if (tvShow.image && tvShow.image.medium) {
          imageUrl = tvShow.image.medium;   // real image
        } else {
          imageUrl = "https://placehold.co/210x295?text=Not%20Found";
        }
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = tvShow.name;
        article.appendChild(img);
        if (tvShow.summary) {
          const summaryDiv = document.createElement("div");
          summaryDiv.innerHTML = tvShow.summary;
          article.appendChild(summaryDiv);
        }

        resultsDiv.appendChild(article);
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
      resultsDiv.textContent = "Something went wrong.";
    });
});
