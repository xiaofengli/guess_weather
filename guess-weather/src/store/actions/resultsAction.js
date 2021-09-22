import {WEATHER_REPORT, ERROR} from '../types'
import axios from 'axios'

let API_KEY= 'f3b063e74d78a00538f244acf865b51a'; 
let URL = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid='+'{'+API_KEY+'}';


let results = [];

export const getWeather = (city, temp) => async dispatch => { 
    console.log(city);
    console.log(temp);
    
    // The following is a simulation of weather of the city at the current moment, I can't get the above API to work
    const weathers = [{city: "champaign", temp: 32}, 
                      {city: 'chicago', temp:40 },
                      {city: 'nyc', temp: 28},
                      {city: 'bufflo', temp: 28},
                      {city: 'toronto', temp: 25}
                    ]


  /*   API call, not working, 
    try{
        const res = await axios.get(URL)
        dispatch( {
            type: WEATHER_REPORT,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: ERROR,
            payload: console.log(e),
        })
    }
  */

    

    try {
        const cur_temp = weathers.filter(u=> u.city === city)[0].temp;
       let cmp; 
        if (Math.abs(cur_temp-temp)>5) {
            cmp = {temp, cur_temp, answer: false};
        } else {
            cmp = {temp, cur_temp, answer: true};
        }
        results.push(cmp);
       ;
        console.log('debugging in action'+ cur_temp);
    
        dispatch( {
            type: WEATHER_REPORT,
            payload: results
        })
    }

    catch(e){
        dispatch( {
            type: ERROR,
            payload: console.log(e),
        })
    }
}
