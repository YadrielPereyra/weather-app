const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your free API key

function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) return alert('Please enter a city name.');

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      if (data.cod === '404') {
        document.getElementById('result').innerHTML = 'City not found.';
      } else {
        const weather = `
          <h2>${data.name}</h2>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
        document.getElementById('result').innerHTML = weather;
      }
    })
    .catch(() => {
      document.getElementById('result').innerHTML = 'Error fetching weather data.';
    });
}
