import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { cityStore } from '../reduxTool/validSlice.js'
import { useEffect, useState } from 'react'
import Loader from './Loader.js';
import './Cities.css';
const Cities = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [isLoader, setIsLoader] = useState(true);
  const clickedState = useSelector((state) => state.counter.stateName);
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
        setIsLoader(false);
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
    <React.Fragment>
      {isLoader && <Loader className="loader_div" />}
      {!isLoader &&

        <div className='city_sec'>
          <h2>{clickedState}</h2>
          <ul className='ul_item'>
            {arrayOfCities.map((item) => {
              return (
                <li className="li_item" onClick={() => { cityClickHandler(item) }}>{item}</li>
              )
            })}
          </ul>
        </div>}
      <Link to="/map" className='arrow_btn'><span class="material-symbols-outlined">
        arrow_back
      </span></Link>
    </React.Fragment>
  )
}

export default Cities
