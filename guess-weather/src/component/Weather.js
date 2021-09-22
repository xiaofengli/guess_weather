import React from 'react'
import { connect } from 'react-redux'
import {getWeather} from '../store/actions/resultsAction'

const Weather = ({ dispatch }) => {
  let city;
   let temp;

  return (
    <div>
      <p> the city name you can enter are: chicago, champaign, nyc, bufflo, toronto <br/>
        The reason you see is because I can't get the api working, but I have the axios stub there in action
        </p> 
      <form onSubmit={e => {
        e.preventDefault()
        if (!city.value.trim() || !temp.value.trim()) {
          return
        }
        if (typeof temp.value === 'number') {
          // prompt error,
          console.log("this is an error");
        }
        dispatch(getWeather(city.value.toLowerCase(), temp.value))
        city.value = '';
        temp.value = '';
      }}>
        
        City <input ref={node => city = node} /> <br/>
        Temperature <input ref={node => temp = node} /> <br/>
        <button type="submit">
          Guess
        </button>
      </form>
    </div>
  )
}

export default connect()(Weather)
