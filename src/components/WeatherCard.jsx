import React from 'react';
import { useState } from 'react';

const WeatherCard = ({data}) => {
  const [celcius, setCelsius] = useState(true)
  return (
    <div className="mainContainer">

      <section className="header">
        <h1 className="title">Weather app</h1>
        <input type="text" className="input" placeholder= "Busca una ciudad"/>
        <div className="switchButton">
          <input type="checkbox" name="switchButton" id="switchLabel" className="switchButtonCheckbox" />
          <label htmlFor="switchLabel" className="switchButtonLabel"></label>
        </div>
      </section>

      <section className="card">
        <div className='tempContainer'>
          <h1 className="temperature">{ celcius ? `${(data.main?.temp - 273.5).toFixed(0)}°` : `${((data.main?.temp - 273.5) * 9 / 5 + 32).toFixed(0)}°`}</h1>
          <span className="span">{ celcius ? "C" : "F" }</span>
        </div>
        <img src={`/${data.weather?.[0].icon}.svg`} alt="" className="icon"/>
        <h4 className="wind">Viento: {Math.round(data.wind?.speed*1.6)} KM/H</h4>
        <h4 className="clouds">Nubes: {data.clouds?.all}</h4>
        <h4 className="pressure">Humedad: {data.main?.humidity}</h4>
        <h2 className="city">{data.name}, {data.sys?.country}</h2>
        <p className="description">.{data.weather?.[0].description}.</p>
      </section>
      
      <button className="button" onClick={ () => setCelsius(!celcius)}>{celcius ? "Cambiar a F°" : "Cambiar a C°"}</button>
      
    </div>
  );
};

export default WeatherCard;