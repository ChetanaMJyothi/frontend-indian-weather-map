import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { cityStore} from '../reduxTool/validSlice.js'
import { useEffect, useState } from 'react'

import './Cities.css';
const Cities = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const clickedState = useSelector((state) => state.counter.stateName);
  /* const arrayOfCities = statesIndia[clickedState]; */
  console.log(clickedState);
  const [arrayOfCities, setArrayOfCities] = useState([]);
  useEffect(() => {
    const fetchCityNames = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/${clickedState}`);
        console.log(response);
        const resData = await response.json();
        if (!response.ok) {
          throw new Error(resData.message);
        }
        setArrayOfCities(resData.StateName.cityNames);
      }
      catch (err) {
        console.log(err.message)
      }
    }
    fetchCityNames();
  });


  function cityClickHandler(cityN) {
    dispatch(cityStore(cityN));
    navigate("/weather");
  }
  return (
    <div className='city_sec'>
      <h2>{clickedState}</h2>
      <ul className='ul_item'>
        {arrayOfCities.map((item) => {
          return (
            <li className="li_item" onClick={() => { cityClickHandler(item) }}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Cities
