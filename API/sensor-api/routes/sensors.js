const express = require('express');
const router = express.Router();
const sensores = require('../data/sensors');

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const sensor = sensores.find(s => s.id === id);
  
  if (sensor) {
    res.json(sensor);
  } else {
    res.status(404).json({ error: 'Sensor no encontrado' });
  }
});

router.get('/', (req, res) => {
  res.json(sensores);
});

module.exports = router;
