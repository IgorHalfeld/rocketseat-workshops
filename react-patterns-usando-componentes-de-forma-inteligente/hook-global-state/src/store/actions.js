import { dispatch } from './index';
import services from '../services';

export async function fetchWeather({ lat, lon }) {
  dispatch({ type: 'SET_LOADING', payload: { status: true } });
  const response = await services.weather.get({ lat, lon });
  console.log('response', response)

  dispatch({
    type: 'SET_TEMP',
    payload: {
      temp: {
        currenty: response.main.temp.toFixed(0),
        min: response.main.temp_min.toFixed(0),
        max: response.main.temp_max.toFixed(0),
      },
    },
  });
  dispatch({ type: 'SET_LOADING', payload: { status: false } });
};