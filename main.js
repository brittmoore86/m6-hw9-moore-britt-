// API key: ce57e369227af8466e0b1a3e66b17f67

// Home page
    // Data display, success page (weather data)
    // Error page if failed (wrong input or server is down edge cases)

// JS takes in user data
    // Uses data for API call
    // Return data and parse info for UI

  // Check list:
    // Background image
    // "Feels like" temperature

const api = {
  key: "ce57e369227af8466e0b1a3e66b17f67",
  base: "https://api.openweathermap.org/data/2.5/weather?q='&appid=ce57e369227af8466e0b1a3e66b17f67"
}

var searchBar = document.getElementById('searchUser');

var button = document.getElementById('submit')
button.addEventListener('click', () => {
    getResults(searchBar.value)
})

// async function fetchWeather(location){
//     let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' 
//     + location 
//     + '&appid=ce57e369227af8466e0b1a3e66b17f67');
//     let data = await response.json();

//     console.log(data);
//     }

async function getResults(location){
    let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' +
      location +
      '&units=imperial&appid=ce57e369227af8466e0b1a3e66b17f67')
    .then(weather => {
            return weather.json();
          }).then(displayResults);
    }


// function getResults (query) {
//   fetch('https://api.openweathermap.org/data/2.5/weather?q='&appid=ce57e369227af8466e0b1a3e66b17f67')
//     .then(weather => {
//       return weather.json();
//     }).then(displayResults);
// }

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

  const iconElement = document.querySelector('.icon')

  // let iconsForTemp = 'http://openweathermap.org/img/wn/${items.icon}.png';
  // tempIcon.src = iconsForTemp;
}