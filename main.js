// API key: ce57e369227af8466e0b1a3e66b17f67

// JS takes in user data
    // Uses data for API call
    // Return data and parse info for UI

const api = {
  key: "ce57e369227af8466e0b1a3e66b17f67",
  base: "https://api.openweathermap.org/data/2.5/weather?q='&appid=ce57e369227af8466e0b1a3e66b17f67"
}

var searchBar = document.getElementById('searchUser');

var button = document.getElementById('submit')
button.addEventListener('click', () => {
    getResults(searchBar.value)
})

async function getResults(location){
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
      location +
      '&units=imperial&appid=ce57e369227af8466e0b1a3e66b17f67')
    .then(weather => {
            return weather.json();
          }).then(displayResults);
    }

function displayResults (weather) {
  console.log(weather);
  let city = document.querySelector('.city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temp = document.querySelector('.temp');
  temp.innerHTML = 'Current temperature: ' + `${Math.round(weather.main.temp)}<span>°F</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let feelsLike = document.querySelector('.feels');
  feelsLike.innerText = `Feels like: ${Math.round(weather.main.feels_like)} °F `;

  let iconElement = document.querySelector(".weather-icon");
    document.querySelector(".weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      iconElement.innerHTML = (current.weather.icon);
}

