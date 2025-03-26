function fetchWeather() {
    let searchInput = document.getElementById("search").value;
    const weatherDataSection = document.getElementById("weather-data");
    weatherDataSection.style.display = "block";
    const apiKey = WEATHER_API_KEY;

    if (searchInput == "") {
        weatherDataSection.innerHTML = `
        <div>
            <h2>Empty Input!</h2>
            <p>Please try again with a valid <u>city name</u>.</p>
        </div>
        `;
        return
    }

    async function getLonAndLat() {
        const countryCode = 1;
        const geocodeURL = `https://api.openweathermap.org/geo/1.0/direct?q=${searchInput.replace(" ", "%20")},${countryCode}&limit=1&appid=${apiKey}`
        if (!response.ok) {
            console.log("Bad response! ", response.status);
            return
        }

        const data = await response.json();

        if (data.length == 0) {
            console.log("Something went wrong here.");
            weatherDataSection.innerHTML = `
                <div>
                    <h2>Invalid Input: "${searchInput}"</h2>
                    <p>Please try again with a valid <u>city name</u>.</p>
                </div>
            `;
            return
        } else {
            return data[0];
        }
    }

    async function getWeatherData() {

    }
}
