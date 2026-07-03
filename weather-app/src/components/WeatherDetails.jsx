function WeatherDetails({ weather }) {
  if (!weather) return null;

  return (
    <div className="weather-details">
      <div className="detail-card">
        <span className="detail-icon">💧</span>
        <div className="detail-info">
          <p className="detail-label">Humidité</p>
          <p className="detail-value">{weather.main.humidity}%</p>
        </div>
      </div>
      
      <div className="detail-card">
        <span className="detail-icon">💨</span>
        <div className="detail-info">
          <p className="detail-label">Vitesse du vent</p>
          <p className="detail-value">{weather.wind.speed} m/s</p>
        </div>
      </div>
      
      <div className="detail-card">
        <span className="detail-icon">🌡️</span>
        <div className="detail-info">
          <p className="detail-label">Ressenti</p>
          <p className="detail-value">{Math.round(weather.main.feels_like)}°C</p>
        </div>
      </div>
      
      <div className="detail-card">
        <span className="detail-icon">☁️</span>
        <div className="detail-info">
          <p className="detail-label">Condition</p>
          <p className="detail-value">{weather.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
