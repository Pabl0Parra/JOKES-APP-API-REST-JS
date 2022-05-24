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

async function getLocalWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=3979566bab46a26b742f8eacf6ddcaca&lang=eng&units=metric"
  );
  const weather = await response.json();
  console.log(`weather:`, weather);
  weatherResponse.innerHTML = weather.temp;
  return weather;
}
getLocalWeather();
