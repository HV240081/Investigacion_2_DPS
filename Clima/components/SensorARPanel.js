import React from 'react';
import { ViroNode, ViroText } from '@reactvision/react-viro';

const SensorARPanel = ({ data }) => {
  if (!data) return null;

  return (
    <ViroNode position={[0, 0, -2]}>
      <ViroText
        text={`🌡 Temp: ${data.temperatura} °C\n💧 Humedad: ${data.humedad} %\n📍 ${data.ubicacion}\n⚙ Estado: ${data.estado}`}
        scale={[0.5, 0.5, 0.5]}
        width={2}
        height={2}
        style={{ fontFamily: 'Arial', fontSize: 30, color: 'white' }}
      />
    </ViroNode>
  );
};

export default SensorARPanel;
