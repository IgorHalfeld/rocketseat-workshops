import React, { useEffect } from 'react';
import LoaderHOC from './components/Loader.jsx';
import { useGlobalState } from './store';
import { fetchWeather } from './store/actions';
import classes from './App.module.scss';

function App() {
  const [isLoading] = useGlobalState('isLoading');
  const [temp] = useGlobalState('temp');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async position => {
      const { coords } = position;
      await fetchWeather({ lat: coords.latitude, lon: coords.longitude });
    });
  }, [])

  return (
    <div className={classes.container}>
      <LoaderHOC
        component={() => (
          <div>
            <h1 className={classes.containerTitle}>hi, friend - {temp.currenty}ºC</h1>
            <span className={classes.containerSubTitle}>min {temp.min}ºC | max {temp.max}ºC</span>
          </div>
        )}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
