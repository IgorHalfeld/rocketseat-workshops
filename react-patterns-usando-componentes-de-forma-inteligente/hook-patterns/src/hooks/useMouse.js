import { useState, useEffect } from 'react';

export default () => {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 });

  function handleMouseMove(event) {
    setMouseCoords({
      x: event.clientX,
      y: event.clientY,
    });
  }
  
  useEffect(() => {
    document.body.addEventListener('mousemove', handleMouseMove, false);
    return () => document.body.removeEventListener('mousemove', handleMouseMove, false);
  }, []);

  return [mouseCoords]
}