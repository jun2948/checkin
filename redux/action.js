export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SET_CITY = 'SET_CITY';

// action creater
export const weatherData = weather => ({
  type: FETCH_WEATHER,
  payload: weather
});

export const setCity = city => ({
  type: SET_CITY,
  payload: city
});