import React from 'react'
import { useSelector } from 'react-redux'
import {Link } from 'react-router-dom';
import './ErrPage.css';
const ErrPage = () => {
  const clickedCity = useSelector((state) => state.counter.cityName)

  return (
    <div className='err_div'>
        <h3>Sorry!!</h3>
        <h3>Error Message: </h3>
      <h2>Weather data of selected city: {clickedCity} is not available from weather.org API</h2>
      <Link to= "/city" className='link_btn'>Go to previous page</Link>
    </div>
  )
}

export default ErrPage
