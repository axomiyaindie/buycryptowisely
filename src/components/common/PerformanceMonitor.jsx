import { useEffect, useState } from 'react';

export const usePerformanceMode = () => {
  const [isSlowDevice, setIsSlowDevice] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  
  useEffect(() => {
    // Check device performance
    const startTime = performance.now();
    for (let i = 0; i < 1000; i++) {
      Math.random() * Math.random();
    }
    const duration = performance.now() - startTime;
    setIsSlowDevice(duration > 5);
    
    // Check connection speed
    if ('connection' in navigator) {
      const connection = navigator.connection;
      setIsSlowConnection(connection.saveData || connection.effectiveType?.includes('2g'));
    }
  }, []);
  
  return { isSlowDevice, isSlowConnection, disableEffects: isSlowDevice || isSlowConnection };
};