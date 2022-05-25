const API_URL = "https://icanhazdadjoke.com/";

const HTMLResponse = document.querySelector("#jokesOutput");
let fetchedJoke = "";

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

// -- LEVEL 2 --

//Exercise 4

// -- Fetch API version --
let currentWeather = [];
// fetch the current weather in BCN
function weatherBalloon(cityID) {
  let key = "8ef5c06696897286002b8e4054506ea8";
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
      drawWeather(data); // Call drawWeather
    })
    .catch((e) => {
      console.log(e); // catch any errors
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
  let icons =
    "http://openweathermap.org/img/wn/" +
    currentWeather.weather[0].icon +
    "@2x.png";

  // paints current temperature
  document.getElementById("temp").innerHTML = celcius + "&deg;" + " " + " ";
  // paints city name
  document.getElementById("location").innerHTML = d.name;
  // paints current weather icon
  document.getElementById("weather_icon").innerHTML = `<img src="${icons}">`;
}

// Exercise 5

const ChuckAPIUrl = "https://api.chucknorris.io/jokes/random";

async function getChuckJokes() {
  const response = await fetch(ChuckAPIUrl, {
    headers: {
      Accept: "application/json",
    },
  });
  norrisJoke = await response.json();

  //console.log(`Ex_5_joke:`, norrisJoke);

  HTMLResponse.innerHTML = norrisJoke.value;

  fetchedChuckJoke = norrisJoke.value;
}
//getChuckJokes();
// choose a random joke between both API´s
function getRandomJoke() {
  // [] w/both functions that can be called
  const functionsArray = [getJokes, getChuckJokes];
  console.log(functionsArray.length);
  let i = Math.floor(Math.random() * functionsArray.length);

  functionsArray[i]();
}
