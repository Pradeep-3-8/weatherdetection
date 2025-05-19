const API_KEY = "099cff2a06750b2e969827fae66c61b4"; // Replace with your OpenWeather API key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weatherInfo = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById("weatherResult").innerHTML = weatherInfo;
            } else {
                document.getElementById("weatherResult").innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => console.error("Error fetching weather data:", error));
}
