const apiKey =  'd6610bb2f16c9c091c4e5d2210aeb157'; // Replace 'YOUR_API_KEY' with your actual API key from OpenWeatherMap or any other provider.
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

function fetchWeather(location) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      locationElement.textContent = data.name;
      temperatureElement.textContent = `${temperature}°C`;
      descriptionElement.textContent = description;
    })
    .catch(error => {
      console.log('Error:', error);
      locationElement.textContent = 'Failed to fetch weather data';
      temperatureElement.textContent = 'N/A';
      descriptionElement.textContent = 'Please try again later';
    });
}

function weather() {
  const x = document.getElementById('city').value;
  
  fetchWeather(x);
}

// Fetch weather on page load for the initial city (you can change 'patna' to any other city if you want).
const initialCity = 'patna';
fetchWeather(initialCity);
