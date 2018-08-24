import { combineReducers } from 'redux';
import { FETCH_WEATHER, SET_CITY } from './action'; 

const fetchWeatherData=(state = {}, action) => {
  switch(action.type){
    case FETCH_WEATHER:
      return {...state, ...action.payload };  
    default:
      return state;
  }
}

const reducer = combineReducers({

});

export default reducer;