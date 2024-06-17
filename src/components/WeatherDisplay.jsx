import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ weather, forecast }) => {
  if (!weather) return <div>No data</div>;

  return (
    <div className="weather-display">
      <div className="weather-card">
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp}°{weather.unit}</p>
        <p>Weather: {weather.weather[0].description}</p>
      </div>
      <h3>5-day Forecast</h3>
      <div className="forecast">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-card">
            <p>Date: {new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>Temp: {day.main.temp}°{weather.unit}</p>
            <p>Weather: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;