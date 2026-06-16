function WeatherCard({ weather }) {
  if (!weather) return null;

  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">{weather.name}</h2>
        <p className="country">{weather.sys.country}</p>
      </div>
      
      <div className="weather-main">
        <img src={iconUrl} alt={weather.weather[0].description} className="weather-icon" />
        <div className="temperature-container">
          <span className="temperature">{Math.round(weather.main.temp)}°C</span>
          <p className="description">{weather.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
