import { Text, View, StyleSheet , Platform } from "react-native";
import * as Device from 'expo-device';

//! function so we can check the operating system the app is running on 
// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>Welcome to Macrozone!</Text>
//       <Text>Running on: {Platform.OS}</Text>
//     </View>
//   );
// }


//! function to se the model number of the device
//! check the device brand name 
//! and check the OS version on the device 
// export default function HomeScreen() {
//   return (
//     <View>
//       <Text>Welcome to Macrozone!</Text>
//       <Text>Running on: {Platform.OS}</Text>
//       <Text>Device Model: {Device.modelName}</Text>   //? model name 
//       <Text>Device Brand: {Device.brand}</Text>       //? brand name
//       <Text>OS Version: {Device.osVersion}</Text>     //? OS version 
//     </View>
//   );
// }


//! inline styling 
export default function HomeScreen() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>   //? inline styling
    <Text>Hello World</Text>
  </View>
  );
}

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <Text>My App</Text>
//     </View>
//     //! this is what is shown on the screen (text)
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
