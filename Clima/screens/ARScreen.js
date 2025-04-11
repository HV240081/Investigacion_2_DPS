import React from 'react';
import { ViroARSceneNavigator } from '@reactvision/react-viro';
import ARScene from '../screens/ARScene';

const ARScreen = () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{ scene: ARScene }}
      style={{ flex: 1 }}
    />
  );
};

export default ARScreen;
