import { createStore } from 'redux';
import { weatherData } from './action';
import reducer from './reducer';

const store = createStore(reducer);
// store.dispatch(weatherData());

console.log(store.getState());
export default store;