"use client"
import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('');
  
  const mediaSmall = 768;
  const mediaMedium = 1024;
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= mediaSmall) {
        setScreenSize('smallScreen');
      } else if (width > mediaSmall && width < mediaMedium) {
        setScreenSize('mediumScreen');
      } else {
        setScreenSize('largeScreen');
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;

//USAGE
// import React from 'react';
// import useScreenSize from './useScreenSize'; // Ścieżka do twojego hooka

// const MyComponent = () => {
//   const screenSize = useScreenSize();

//   return (
//     <div>
//       {screenSize === 'smallScreen' && <p>Mały ekran</p>}
//       {screenSize === 'mediumScreen' && <p>Średni ekran</p>}
//       {screenSize === 'largeScreen' && <p>Duży ekran</p>}
//     </div>

        // <div>
        // {screenSize === 'smallScreen' ? <p>Mały ekran</p> : <p>Duży ekran</p>} - alternative
        // </div>

//   );
// };

// export default MyComponent;
