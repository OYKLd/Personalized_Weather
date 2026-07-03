import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import WeatherDetails from './components/WeatherDetails'
import Loader from './components/Loader'
import { getWeatherByCity } from './services/weatherApi'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (city) => {
    setLoading(true)
    setError(null)
    try {
      const data = await getWeatherByCity(city)
      setWeather(data)
    } catch (err) {
      setError('Ville non trouvée. Veuillez réessayer.')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleSearch('Paris')
  }, [])

  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">Tableau de bord météo</h1>
        <SearchBar onSearch={handleSearch} />
        
        {loading && <Loader />}
        
        {error && <p className="error-message">{error}</p>}
        
        {weather && !loading && (
          <>
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
