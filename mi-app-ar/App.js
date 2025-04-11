// App.js
import React, { useEffect, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { ViroARScene, ViroARSceneNavigator } from "@viro-community/react-viro";
import ARPanel from "./componentes/ARPanel";
import { fetchSensorData } from "./servicios/api";

const MyARScene = (props) => {
  const { data } = props.sceneNavigator.viroAppProps;

  return (
    <ViroARScene>
      <ARPanel {...data} />
    </ViroARScene>
  );
};

export default function App() {
  const [sensorData, setSensorData] = useState({
    temperature: "--",
    humidity: "--",
    location: "Desconocida",
    status: "Desconocido",
  });

  // Auto actualización cada 5s
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSensorData();
      if (data) setSensorData(data);
    };

    fetchData(); // Primera carga
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const handleManualRefresh = async () => {
    const data = await fetchSensorData();
    if (data) setSensorData(data);
  };

  return (
    <View style={styles.container}>
      <ViroARSceneNavigator
        autofocus={true}
        initialScene={{ scene: MyARScene }}
        viroAppProps={{ data: sensorData }}
        style={styles.arView}
      />
      <View style={styles.buttonContainer}>
        <Button title="🔄 Actualizar Datos" onPress={handleManualRefresh} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  arView: { flex: 1 },
  buttonContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
});
