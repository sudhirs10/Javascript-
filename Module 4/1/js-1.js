"use strict";

const form = document.getElementById("search-form");
const input = document.getElementById("query");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = input.value.trim();
  if (text === "") {
    console.log("Please enter a show name.");
    return;
  }

  const url = "https://api.tvmaze.com/search/shows?q=" + encodeURIComponent(text);

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Full API response:", data);

      if (data.length === 0) {
        console.log("No shows found.");
        return;
      }

      const show = data[0].show;
      console.log("Name:", show.name);
      console.log("Language:", show.language);
      console.log("Genres:", show.genres);
      console.log("Premiered:", show.premiered);
      console.log("Official Site:", show.officialSite);
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});
