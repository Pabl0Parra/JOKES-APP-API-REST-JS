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

// -- Fetch API version --

// fetch the current weather in BCN
function weatherBalloon(cityID) {
  let key = "3979566bab46a26b742f8eacf6ddcaca";
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
      //console.log(data);
      drawWeather(data); // Call drawWeather
    })
    .catch(() => {
      // catch any errors
    });
}

window.onload = () => {
  // The parameter corresponds to Bcn_id
  weatherBalloon(3128760);
};

// paint the weather in navbar
function drawWeather(d) {
  let celcius = Math.round(parseFloat(d.main.temp) - 273.15);

  document.getElementById("description").innerHTML = d.weather[0].description;
  document.getElementById("temp").innerHTML = celcius + "&deg;";
  document.getElementById("location").innerHTML = d.name;
}
