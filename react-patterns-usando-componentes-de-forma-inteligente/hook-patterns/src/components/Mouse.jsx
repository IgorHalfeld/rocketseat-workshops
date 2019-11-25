import React, { useState } from 'react';
import classes from './Mouse.module.scss';

const Mouse = ({ render }) => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setMouseCoords({
      x: event.clientX,
      y: event.clientY,
    });
  }
  
  return (
    <div onMouseMove={handleMouseMove} className={classes.mouseContainer}>
      {render(mouseCoords)}
    </div>
  );
};

export default Mouse;