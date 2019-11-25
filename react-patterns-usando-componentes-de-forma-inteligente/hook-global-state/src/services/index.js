import WeatherService from './weather';

export default {
  weather: WeatherService(fetch),
}