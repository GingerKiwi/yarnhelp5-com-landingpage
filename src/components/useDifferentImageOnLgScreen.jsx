import { useState, useEffect } from 'react';

const useDifferentImageOnLgScreen = () => {
  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize('sm');
      } else if (window.innerWidth < 768) {
        setScreenSize('md');
      } else {
        setScreenSize('lg');
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};
