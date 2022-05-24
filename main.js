const API_URL = "https://icanhazdadjoke.com/";

const HTMLResponse = document.querySelector("#jokesOutput");

async function getJokes() {
  const response = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  // Exercise 1
  console.log(`Ex_1_joke:`, data);
  // Exercise 2
  HTMLResponse.innerHTML = data.joke;
  // Exercise 3
  fetchedJoke = data.joke;
}

const reportJokes = [];
let fetchedJoke = "";

function setScore(value) {
  const currentDate = new Date();
  let currentDateISO = currentDate.toISOString();

  reportJokes.push({
    joke: fetchedJoke,
    date: currentDateISO,
    score: value,
  });
  console.log("Ex_3: array with scores: ", reportJokes);
  return value;
}

//Exercise 4
const weatherResponse = document.querySelector("#weather");
const weatherAPIKey = "f2993b367d3d44028f4152530222305";

async function getLocalWeather() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=f2993b367d3d44028f4152530222305 &q=08930&aqi=no" +
      weatherAPIKey
  );
  const weather = await response.json();
  return weather;
}
