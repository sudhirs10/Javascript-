"use strict";
const form = document.getElementById("search-form");
const input = document.getElementById("query");
form.addEventListener("submit", async function (event) {
  event.preventDefault();   // stop normal form submit

  const value = input.value.trim();
  if (value === "") {
    console.log("Please type something.");
    return;
  }
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Search results:", data);
    if (data.length === 0) {
      console.log("No TV series found.");
      return;
    }
    for (let i = 0; i < data.length; i++) {
      const show = data[i].show;
      console.log("--------------");
      console.log("Name:", show.name);
      console.log("Language:", show.language);
      console.log("Genres:", show.genres);
      console.log("Premiered:", show.premiered);
      console.log("Official site:", show.officialSite);
    }

  } catch (error) {
    console.log("Error:", error);
  }
});
