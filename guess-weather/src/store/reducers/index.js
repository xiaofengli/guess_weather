import { combineReducers } from 'redux'
import weatherReducer from './weathersReducer'

export default combineReducers({
  weathers: weatherReducer
})
