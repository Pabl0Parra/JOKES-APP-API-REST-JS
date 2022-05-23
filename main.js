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
}
// getJokes();

// Exercise 3
const reportJokes = [];
let scoreUser = 0;
let joke = getJokes();

let setScore = (value) => {
  const currentDate = new Date();
  let currentDateISO = currentDate.toISOString();

  if (value === 1) {
    scoreUser = 1;
  }
  if (value === 2) {
    scoreUser = 2;
  }
  if (value === 3) {
    scoreUser = 3;
  }
  // Need to figure a way to insert current joke into objects array
  reportJokes.push({ joke: joke.joke, date: currentDateISO, score: scoreUser });
  console.log("Ex_3: array with scores: ", reportJokes);
  return scoreUser;
};
// function setScore(score) {
//   let currentTime = new Date();
//   // Save the date in ISO format
//   let currentTimeISO = currentTime.toISOString();
//   let currentScore = {
//     joke: joke.joke,
//     score: score,
//     date: currentTimeISO,
//   };
//   reportJokes.push(currentScore);
//   console.log("reportJokes: ", reportJokes);
// }
// //setScore(score);

//Exercise 4
const weatherResponse = document.querySelector("#weather");
const weatherAPIKey = f2993b367d3d44028f4152530222305;

async function fetchWeatherJSON() {
  const response = await fetch(
    "http://api.weatherapi.com/v1/current.json?key=f2993b367d3d44028f4152530222305 &q=08930&aqi=no" +
      weatherAPIKey
  );
  const weather = await response.json();
  return weather;
}
