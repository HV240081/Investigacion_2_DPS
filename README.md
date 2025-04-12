Cómo ejecutar el proyecto

El proyecto se divide en 2 archivos. El archivo con carpeta clima se desarrolla la configuracion del entorno en general mientras que la carpeta de API gestiona solicitudes HTTP cada 5 segundos para 
actualizar los datos ademas de mostrar en el panel de AR la temperatura y humedad.

Para correr el proyecto en Clima debes contar con lo siguiente: 
1.Requisitos previos
Asegúrate de tener instalado lo siguiente en tu máquina con Windows:  
  1.1 Node.js v18 o superior
  1.2 JDK 17 
  1.3 Android Studio
  1.4 ADB (Android Debug Bridge)

2. Variables de entorno configuradas:

JAVA_HOME
ANDROID_HOME
Añadir adb.exe a tu PATH

3.Crear las dependencias del proyecto

  3.1 Clona el repositorio
  3.2 npm install
  3.3 npx @react-native-community/cli init
  3.4 npm install @viro-community/react-viro

  "Para correr la aplicacion"
  npx expo run:android

  Para correr el proyecto en API escribir el siguiente comando:
  node app.js

  
