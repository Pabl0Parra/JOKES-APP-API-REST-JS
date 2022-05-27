// --------- Variables -------------
// Jokes API Url
const API_URL = "https://icanhazdadjoke.com/";
// where the jokes are going to be display
const HTMLResponse = document.querySelector("#jokesOutput");
// empty variable to later store the joke (Ex_3)
let fetchedJoke = "";
// empty [] to later push the jokes w/scores (Ex_3)
const reportJokes = [];
// empty [] to later retrieve correct weather icon
let currentWeather = [];
// Chuck's Jokes API Url
const ChuckAPIUrl = "https://api.chucknorris.io/jokes/random";
// ------------------------------- Exercise 1 --------------------------------------------------
async function getJokes() {
  // API call
  const response = await fetch(API_URL, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();

  console.log(`Ex_1_joke:`, data);
  // ------------------------------- Exercise 2 --------------------------------------------------
  HTMLResponse.innerHTML = data.joke;
  // variable to store the joke to be used in setScore()
  fetchedJoke = data.joke;
}

// --------------------------------- Exercise 3 --------------------------------------------------

function setScore(value) {
  const currentDate = new Date();
  // convert date to ISO standards
  let currentDateISO = currentDate.toISOString();
  // push the following key/values into array
  reportJokes.push({
    joke: fetchedJoke,
    date: currentDateISO,
    score: value,
  });
  console.log("Ex_3: array with scores: ", reportJokes);
  return value;
}

// ---------------------------------- LEVEL 2 ----------------------------------------------------

// --------------------------------- Exercise 4 --------------------------------------------------

// -- Fetch API version --

// fetch the current weather in BCN
function weatherBalloon(cityID) {
  // open weather key
  let key = "8ef5c06696897286002b8e4054506ea8";
  // API call
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityID +
      "&appid=" +
      key
  )
    .then((resp) => {
      return resp.json(); // Convert data to json
    })
    .then((data) => {
      console.log("weather array:", data);
      currentWeather = data;
      drawWeather(data); // Call drawWeather with weather data
    })
    .catch((err) => {
      console.log(`The API is not responding`); // catch any errors
      console.error(err);
    });
}

window.onload = () => {
  // The parameter corresponds to bcn_id
  weatherBalloon(3128760);
};

// paint the weather in header
function drawWeather(d) {
  // display temperature in right format
  let celcius = Math.round(parseFloat(d.main.temp) - 273.15);
  // get right weather icon from API for that moment
  let icons =
    "http://openweathermap.org/img/wn/" +
    currentWeather.weather[0].icon +
    "@2x.png";

  // paint current temperature
  document.getElementById("temp").innerHTML = celcius + "&deg;" + " " + " ";
  // paint city name
  document.getElementById("location").innerHTML = d.name;
  // paint current weather icon
  document.getElementById("weather_icon").innerHTML = `<img src="${icons}">`;
}

// --------------------------------- Exercise 5 --------------------------------------------------

async function getChuckJokes() {
  const response = await fetch(ChuckAPIUrl, {
    headers: {
      Accept: "application/json",
    },
  });
  norrisJoke = await response.json();

  HTMLResponse.innerHTML = norrisJoke.value;

  fetchedJoke = norrisJoke.value;
}

// choose a random joke between both API´s
function getRandomJoke() {
  // [] w/both functions that can be called
  const functionsArray = [getJokes, getChuckJokes];
  let i = Math.floor(Math.random() * functionsArray.length);

  functionsArray[i]();
}
// displays jokes at the beginning of the app
getRandomJoke();
