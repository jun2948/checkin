import { combineReducers } from 'redux';
import { FETCH_WEATHER, SET_CITY } from './action'; 

const fetchWeatherData=(state = {}, action) => {
  if (action.type === FETCH_WEATHER){
    return [...state, ...action.payload ];  
  }
  return state;
};

const searchCity =(state = {}, action) => {
  if (action.type === SET_CITY){
    return [...state, ...action.payload ];  
  }
  return state;
};
  
const reducer = combineReducers({
  weather: fetchWeatherData,
  city: searchCity
});

export default reducer;