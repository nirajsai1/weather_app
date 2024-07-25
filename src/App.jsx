import React, { useState } from "react";
import './App.css';  // Import the CSS file

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handle = (event) => {
    setCity(event.target.value);
  };

  const citycal = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea9ab2c3f33d32f15dab416a62c5dec1`)
      .then(res => res.json())
      .then(data => setWeather(data))
      .catch(error => console.log(error));
  };

  return (
    <div className="container">
      <input type="text" onChange={handle} placeholder="Enter city" />
      <button onClick={citycal}>Get Weather</button>
      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;

