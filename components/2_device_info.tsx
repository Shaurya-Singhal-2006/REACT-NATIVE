// Beginner example: read basic device details with Expo and React Native.

// Device provides hardware details such as the model and brand.

import * as Device from 'expo-device';
// Platform tells which operating system is running; Text and View build the screen.

import { Platform, Text, View } from 'react-native';

// This component displays a heading and several details about the current device.

export default function DeviceInfo() {
  return (
    // View groups the heading and four device-information rows.

    <View>
      {/* This Text element draws a simple heading. */}

      <Text>DEVIDE INFO !!</Text>
      {/* tells the operating system of the device */}
      {/* Text displays a label plus Platform.OS, such as android, ios, or web. */}

      <Text>Running on: {Platform.OS}</Text>

      {/* Text displays Device.modelName when the operating system provides it. */}

      <Text>Device Model: {Device.modelName}</Text>

      {/* Text displays Device.brand, the device manufacturer's name if available. */}

      <Text>Device Brand: {Device.brand}</Text>

      {/* Text displays Device.osVersion, the installed system version. */}

      <Text>OS Version: {Device.osVersion}</Text>
    </View>
  );
}
