function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = 'YOUR_API_KEY'; // Get it from openweathermap.org
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const result = `
        <p><strong>City:</strong> ${data.name}</p>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
      `;
      document.getElementById('weather-result').innerHTML = result;
    })
    .catch(error => {
      document.getElementById('weather-result').innerHTML = "City not found!";
    });
}
