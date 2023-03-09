import './App.css'
import React from "react"
import {useEffect, useState} from 'react'
import axios from 'axios'
import WeatherCard from "./components/WeatherCard";


const App = () => {
  // estado para el clima (carga inicial)
  const [getWeather, setGetWeather] = useState ({ })
  
  // info para URL
  const endPoint = "https://api.openweathermap.org/data/2.5/weather?"
  const apiKey = "435b2277889c0ab1c257ce3f20554731"
  const lat = ""
  const lon = ""
  
  useEffect(()=>{
    // funciona la localizacion?
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
      } else{
        alert("No se puede acceder a la ubicación")
      }
    // obteniendo latitud y longitud
    function success(geolocationPosition) {
      const lat = geolocationPosition.coords.latitude
      const lon = geolocationPosition.coords.longitude
     // consumo de la API 
      axios
        .get(`${endPoint}lat=${lat}&lon=${lon}&appid=${apiKey}&lang=sp`)
        .then( (resp) => setGetWeather(resp.data))
        .catch( (error) => console.error(error))
    }
  }, []) // 

    // estado para cargar la ciudad
    const [city, getCity] = useState ({})
  


  
 // ENTRADA MANUAL DE LAT & LON
 /*  useEffect(() => {
    axios
    .get( 'https://api.openweathermap.org/data/2.5/weather?lat=18.9476362016042&lon=-98.24096570079028&appid=435b2277889c0ab1c257ce3f20554731&lang=sp' )
    .then( resp => setGetWeather (resp.data) )
    .catch( error => console.error(error) )
  }, []) */
  
  

    return (
    <div className="App">
      
      <WeatherCard 
      data = {getWeather}
        />
    </div>
   

  
  );
};

export default App;