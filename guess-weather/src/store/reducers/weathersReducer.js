import {WEATHER_REPORT} from '../types'

const initialState = {
    weathers:[]
}

export default function(state = initialState, action){

    switch(action.type){

        case WEATHER_REPORT:
        return {
            ...state,
            weathers:action.payload,
           

        }
        default: return state
    }

}
