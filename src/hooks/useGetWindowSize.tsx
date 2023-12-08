import { useEffect, useState } from 'react';

export const useGetWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState<number>();

  useEffect(() => {
    const handleWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowWidth);

    return () => {
      window.removeEventListener('resize', handleWindowWidth);
    };
  }, []);

  return { windowWidth };
};
