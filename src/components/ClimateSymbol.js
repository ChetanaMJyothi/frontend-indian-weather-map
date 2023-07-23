import React, { useState, useEffect } from 'react'
import sun from '../images/sun.gif';
import cloudy from '../images/cloudy.gif';
import clouds from '../images/clouds.gif';
import rain from '../images/rain.gif';
import drizzle from '../images/drizzle.gif';
import stormy from '../images/stormy.gif';
import snow from '../images/snow.gif';
import mist from '../images/mist.gif';
import day from '../images/day.png';
import night from '../images/night.png';
import './ClimateSymbol.css';
const ClimateSymbol = (props) => {
    const [ClimateImage, setImage] = useState("");
    const [DayOrNight, setDayOrNight] = useState(false);
    useEffect(() => {
        if (props.imageCode === "01d" || props.imageCode === "01n") {
            setImage(sun)
        }
        else if (props.imageCode === "02d" || props.imageCode === "02n") {
            setImage(cloudy)
        }
        else if (props.imageCode === "03d" || props.imageCode === "03n" || props.imageCode === "04d" || props.imageCode === "04n") {
            setImage(clouds)
        } else if (props.imageCode === "09d" || props.imageCode === "09n") {
            setImage(rain)
        } else if (props.imageCode === "10d" || props.imageCode === "10n") {
            setImage(drizzle)
        } else if (props.imageCode === "11d" || props.imageCode === "11n") {
            setImage(stormy)
        }
        else if (props.imageCode === "13d" || props.imageCode === "13n") {
            setImage(snow)
        }
        else if (props.imageCode === "50d" || props.imageCode === "50n") {
            setImage(mist)
        }
        if (props.imageCode === "50d" || props.imageCode === "01d" || props.imageCode === "02d" || props.imageCode === "03d" || props.imageCode === "09d" || props.imageCode === "10d" || props.imageCode === "11d" || props.imageCode === "13d" || props.imageCode === "50d" || props.imageCode === "04d") {
            setDayOrNight(true);
        }
        else {
            setDayOrNight(false);

        }
    }, [props]);
    return (
        <div>
            <div className='content'>
                {DayOrNight ? <p className='dn_p'>Day</p> : <p className='dn_p'>Night</p>}
                {DayOrNight ? <img src={day} className='dn_img' alt="abcd" /> : <img src={night} className='dn_img'  alt="abcd" />}
            </div>
            <img className="climate_image_cls" src={ClimateImage}  alt="abcd"></img>
        </div>
    )
}

export default ClimateSymbol
