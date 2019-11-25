import React from 'react';
import Mouse from './components/Mouse.jsx';
import classes from './App.module.scss'

function App() {

  return (
    <div className={classes.container}>
      <Mouse
        render={coords => {
          return (
            <div
              style={{
                left: `${coords.x - 75}px`,
                top: `${coords.y - 75}px`,
              }}
              class={classes.box}
            >
            </div>
          )
        }}
      />
    </div>
  );
}

export default App;
