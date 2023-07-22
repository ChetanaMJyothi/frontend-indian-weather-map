import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ErrPage = () => {
  const clickedCity = useSelector((state) => state.counter.cityName)

  return (
    <div>
        <h3>Sorry!!</h3>
        <h3>Error Message: </h3>
      <h2>Weather data of selected city: {clickedCity} is not available</h2>
    </div>
  )
}

export default ErrPage
