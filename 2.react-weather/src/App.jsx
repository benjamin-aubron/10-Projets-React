import loader from "./assets/loader.svg"
import browser from "./assets/browser.svg"
import { useEffect, useState } from "react";
import "./App.css"
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY


function App() {

  const [weatherData, setWeatherData] = useState(null)
  const [errorInfo, setErrorInfo] = useState(null)

  useEffect(() =>{
    // setTimeout(() => {
      fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)
      .then(response =>{
        // 400 - 499 : Erreur Clients
        // 500 - 599 : Erreur serveur
        if(!response.ok) throw new Error(`Error ${response.status}, ${response.statusText}`)
        return response.json()
      })
      .then(responseData => {
        console.log(responseData)
        setWeatherData({
          city: responseData.data.city,
          country: responseData.data.country,
          iconId: responseData.data.current.weather.ic,
          temperature: responseData.data.current.weather.tp
        })
      })
      .catch(err => {
        console.log(err)
        setErrorInfo(err.message)
      })      
    // }, 1500);
  
  }, [])
 
  return (

      <main>
        <div className={`loader-container ${(!weatherData && !errorInfo) && "active"}`}>
          <img src={loader} alt="loading icon" />
        </div>
        {weatherData && (
        <>
          <p className="city-name">{weatherData.city}</p>
          <p className="country-name">{weatherData.country}</p>
          <p className="temperature">{weatherData.temperature}°</p>
          <div>
            <img src={`/icons/${weatherData.iconId}.svg`} alt="weather icon" className="info-icon" />
          </div>
        </>
        )}

        {(errorInfo && !weatherData) && (
          <>
            <p className="error-information">{errorInfo}</p>
            <img src={browser} alt="error icon" />
          </>
        )}

      </main>
  
  );
}

export default App;
