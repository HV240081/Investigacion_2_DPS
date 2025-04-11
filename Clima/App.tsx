/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// App.tsx
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Button, Alert, Platform, PermissionsAndroid } from 'react-native';
import ARScreen from './screens/ARScreen';

const App = () => {
  const [showAR, setShowAR] = useState(false);
  const [cameraAllowed, setCameraAllowed] = useState(false);

  useEffect(() => {
    const requestCameraPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setCameraAllowed(true);
          } else {
            Alert.alert('Permiso denegado', 'Necesitas permitir el uso de la cámara.');
          }
        } catch (err) {
          console.warn(err);
        }
      } else {
        setCameraAllowed(true);
      }
    };

    requestCameraPermission();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {showAR ? (
        <ARScreen />
      ) : (
        <Button
          title="Iniciar Escena AR"
          onPress={() => {
            if (cameraAllowed) {
              setShowAR(true);
            } else {
              Alert.alert('Permiso de cámara requerido');
            }
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
