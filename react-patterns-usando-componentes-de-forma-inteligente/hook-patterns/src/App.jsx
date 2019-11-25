import React from 'react';
import useMouse from './hooks/useMouse';
import classes from './App.module.scss'

function App() {
  const [coords] = useMouse();
  return (
    <div className={classes.container}>
      <div
        style={{
          left: `${coords.x - 75}px`,
          top: `${coords.y - 75}px`,
        }}
        class={classes.box}
      />
    </div>
  );
}

export default App;
