const express = require('express');
const cors = require('cors');
const sensorRoutes = require('./routes/sensors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/sensor', sensorRoutes);

app.get('/', (req, res) => {
  res.send('API Sensor IoT en funcionamiento.');
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
