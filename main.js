const API_URL = 'https://icanhazdadjoke.com/'

const HTMLResponse = document.querySelector("#jokesOutput")

async function getJokes(){
    const response =  await fetch (API_URL, {
        headers: {
            'Accept': 'application/json'
        }        
    });
    const data = await response.json();

    // Exercise 1
    console.log(data); 
    // Exercise 2
    HTMLResponse.innerHTML = data.joke; 
}
//getJokes();

// fetch(`${API_URL}`).then(response => response.json).then(json => console.log(json))

// Exercise 3
const reportJokes = []


function scoreJokes() {
    let currentTime = new Date();
    // Save the date in ISO format
    let currentTimeISO = currentTime.toISOString();
    let currentScore = {
      date: currentTimeISO,
      score: score,
      joke: jokes.joke,
    };
    reportJokes.push(currentScore);
    console.log("reportJokes: ", reportJokes);
  }
  scoreJokes(score)