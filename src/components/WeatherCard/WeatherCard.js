import React, { useEffect, useState } from 'react'
import './WeatherCard.css'
import axios from 'axios';

function WeatherCard() {

  // Use State
  const [weather, setWeather] = useState([]);

  // Tableau d'objet contenant les images des différents états météorologiques
  const imgWeatherStatus = [
    {
      id: 1,
      nom_img: 'Partly_cloudy',
      path: 'images/Partly_cloudy.png'
    },
    {
      id: 2,
      nom_img: 'Sunny',
      path: 'images/Sunny.png'
    },
    {
      id: 3,
      nom_img: 'cloundy',
      path: 'images/cloundy.png'
    },
    {
      id: 4,
      nom_img: 'Heavy_downpour',
      path: 'images/Heavy_downpour.png'
    },
    {
      id: 5,
      nom_img: 'Light_shower',
      path: 'images/Light_shower.png'
    },
    {
      id: 6,
      nom_img: 'Stormy_rain',
      path: 'images/Stormy_rain.png'
    },
    {
      id: 7,
      nom_img: 'Thunderstorm',
      path: 'images/Thunderstorm.png'
    },
    {
      id: 8,
      nom_img: 'Subtract',
      path: 'images/Subtract.png'
    },
    {
      id: 9,
      nom_img: 'Partly_cloudy_night',
      path: 'images/Partly_cloudy_night.png'
    },
    {
      id: 10,
      nom_img: 'Cleared',
      path: 'images/Cleared.png'
    }
  ]

  // Fonction pour récupérer la météo
  const getWeather = async () => {
    const url = axios.get('http://127.0.0.1:5000/apiWeather')
    const response = await url;
    const randomWeather = response.data[Math.floor(Math.random() * response.data.length)];
    setWeather(randomWeather);
  }

  useEffect(() => {
    getWeather();
  }, [])

  return (
    <div className='weatherCard'>
      <div className="headerCard">
        <div className="imgWeatherStatus">
          <img src={imgWeatherStatus[0].path} alt={imgWeatherStatus[0].nom_img} />
        </div>
      </div>
      <div className="bodyCard">
        <div className="cityAndTemp">
          <p>{weather.city}</p>
          <span>{weather.temperature}°C</span>
        </div>
        <div className="wind">
          <p>{weather.windSpeed} km/h</p> 
        </div>
        <div className="dayAndHours">
          <p>{weather.date}</p>
          <p>{weather.time}</p>
        </div>
        <div className="status">
          <p>{weather.weatherStatus}</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard