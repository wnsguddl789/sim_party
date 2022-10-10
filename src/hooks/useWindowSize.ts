import React from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

  React.useEffect(() => {
    window.addEventListener('resize', handleSize);
    handleSize();

    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
};
