import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useSelector} from 'react-redux'
import ClimateSymbol from './ClimateSymbol';
import hot from '../images/hot.png';
import wind from '../images/windImg.png';
import humid from '../images/humid.png';
import './Weather.css';
const Weather = () => {
  const navigate = useNavigate();
  const clickedCity = useSelector((state) => state.counter.cityName)
  const [APIdata, setAPIdata] = useState("");
  console.log(APIdata)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${clickedCity}&appid=65df536f934f17665fc9edb2e1f2bedd&units=metric`);
        const data = await response.json();
        console.log(data);
        if (data.cod === "404") {
          navigate("/errpage");
        }
        setAPIdata(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        
        navigate("/errpage");
      }
    };

    fetchData();
  }, [clickedCity, navigate]);
  if (APIdata) {
    return (
      <div>
        <h1>{clickedCity}</h1>
        <div className="weatherCls">

          <div className='weatherCard'>
            <ClimateSymbol imageCode={APIdata.weather[0].icon}></ClimateSymbol>
            <p>{APIdata.weather[0].description.toUpperCase()}</p>
            <div className='three_sec'>
              <div className='eachSec'>
                <img src={hot} className='logo_cls' alt="temperature symbol" />
                <p>Temperature: {APIdata.main.temp} &deg;C</p>
              </div>
              <div className='eachSec'>
                <img src={wind} className='logo_cls' alt='wind symbol' />
                <p>Wind Speed: {APIdata.wind.speed} km/h</p>
              </div>
              <div className='eachSec'>
                <img src={humid} className='logo_cls' alt='humidity symbol' />
                <p>Humidity: {APIdata.main.humidity}%</p>
              </div>
            </div>
          </div>
          <Link to="/city" className='arrow_btn'><span class="material-symbols-outlined">
arrow_back
</span></Link>
        </div>

      </div>

    )
  }
}

export default Weather
