import React, { useState, useEffect } from 'react';
import LoaderHOC from './components/Loader.jsx';
import classes from './App.module.scss';

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  return (
    <div className={classes.container}>
      <LoaderHOC
        component={() => <h1 className={classes.containerTitle}>hi, friend.</h1>}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
