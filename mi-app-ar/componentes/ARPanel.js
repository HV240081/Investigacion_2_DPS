// src/components/ARPanel.js
import React from "react";
import { ViroText, ViroNode } from "@viro-community/react-viro";

const ARPanel = ({ temperature, humidity, location, status }) => {
  return (
    <ViroNode position={[0, 0, -2]}>
      <ViroText
        text={`🌡 Temp: ${temperature}°C\n💧 Humedad: ${humidity}%\n📍 Ubicación: ${location}\n⚙️ Estado: ${status}`}
        width={2}
        height={2}
        position={[0, 0, 0]}
        style={{ fontSize: 30, color: "#ffffff" }}
      />
    </ViroNode>
  );
};

export default ARPanel;
