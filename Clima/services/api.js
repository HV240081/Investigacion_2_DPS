const BASE_URL = 'http://localhost:3000/api';

export const fetchSensorData = async (id = 1) => {
  const response = await axios.get(`${BASE_URL}/sensor/${id}`);
  return response.data;
};
