const API_URL = 'http://localhost:3000/sensor'; 

export const fetchSensorData = async (sensorId) => {
  try {
    const response = await fetch(`${API_URL}/${sensorId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching sensor data for ID ${sensorId}:`, error);
    return null;
  }
};