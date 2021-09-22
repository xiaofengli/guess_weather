import {WEATHER_REPORT} from '../types'

const initialState = {
    users:[]
}

export default function(state = initialState, action){

    switch(action.type){

        case WEATHER_REPORT:
        return {
            ...state,
            users:action.payload,
           

        }
        default: return state
    }

}
