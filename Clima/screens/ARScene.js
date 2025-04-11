import React from 'react';
import { ViroARScene } from '@reactvision/react-viro';
import { useSensorData } from '../hooks/useSensorData';
import SensorARPanel from '../components/SensorARPanel';

const ARScene = () => {
  const { data } = useSensorData(1); // Sensor ID 1

  return (
    <ViroARScene>
      <SensorARPanel data={data} />
    </ViroARScene>
  );
};

export default ARScene;

