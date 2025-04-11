import { useEffect, useState, useCallback } from 'react';
import { fetchSensorData } from '../services/api';

export const useSensorData = (sensorId) => {
  const [data, setData] = useState(null);

  const getData = useCallback(async () => {
    try {
      const result = await fetchSensorData(sensorId);
      setData(result);
    } catch (error) {
      console.error('Error fetching sensor data:', error);
    }
  }, [sensorId]);

  useEffect(() => {
    getData(); // primer fetch
    const interval = setInterval(getData, 5000);
    return () => clearInterval(interval);
  }, [getData]);

  return { data, refresh: getData };
};
