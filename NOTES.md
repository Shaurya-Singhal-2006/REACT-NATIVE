# ⚛️ REACT NATIVE

> [!IMPORTANT]
> React Native is a framework for building native mobile applications using **JavaScript and React**.

---

## 📂 SINGLE CODEBASE

Traditionally, Android and iOS applications would be two different projects written in different programming languages.

With **React Native**, we can create a single project that runs on both Android and iOS.

---

## 🆚 REACT DOM vs REACT NATIVE

**🌐 React DOM**

* `<div>`
* `<p>`
* `<button>`

**📱 React Native**

* `<View>`

* `<Text>`

* `<Pressable>`

* 🍎 iOS renders native iOS components.

* 🤖 Android renders native Android views.

---

## ⚙️ HOW REACT NATIVE WORKS

### 1. 💻 JavaScript Side

Your code (components, state, and logic) runs in the **Hermes engine**.

### 2. 📱 Native Side

The actual UI elements are real native platform components written in other languages.

### 🔄 Working Process

1. React runs in the JavaScript runtime.
2. React Native processes and prepares the native UI.
3. **JSI (JavaScript Interface)** is used to cross the boundary.
4. **Fabric** handles the UI.
5. **Turbo Modules** handle APIs.

---

## 🚀 EXPO FRAMEWORK

Expo is a framework built on top of React Native that provides a set of tools and services to make it easier to build and deploy React Native applications.

🌐 **Website:** https://expo.dev/

### 🛠️ Commands

**1. Install EAS CLI**

```bash
npm install --global eas-cli
```

**2. Create a New Project**

```bash
npx create-expo-app [name]
```

**3. Navigate to the Project**

```bash
cd [name]
```

**4. Log In to Expo**

```bash
eas login
```

**5. Initialize EAS**

```bash
eas init --id [YOUR_PROJECT_ID]
```

**6. Start the Project**

```bash
npm start
```

**7. Reset the Project**

```bash
npm run reset-project
```

---

### 💡 Quick Reminder

* ⚛️ React Native → Builds native mobile applications.
* 📂 Single Codebase → Supports Android and iOS.
* 🚀 Expo → Simplifies React Native development.

---

# CODES 

## 1. BASIC HOME SCREEN

```
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to React Native!</Text>
    </View>
  );
}
```

---

## 2. check the platform 
```
import { Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to React-Native!</Text>
      <Text>Running on: {Platform.OS}</Text>
    </View>
  );
}
```

---

## 3. check device info 

```
import * as Device from 'expo-device';
import { Platform, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Welcome to React-Native!</Text>
      <Text>Running on: {Platform.OS}</Text>
      <Text>Device Model: {Device.modelName}</Text>
      <Text>Device Brand: {Device.brand}</Text>
      <Text>OS Version: {Device.osVersion}</Text>
    </View>
  );
}
```

---

## 4. inline styling 
```
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Hello World</Text>
  </View>
  );
}
```

---

## 5. stylehsett API

```
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shaurya</Text>
      <Text style={styles.date}>Monday, March 16</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  date: {
    fontSize: 14,
    color: '#a0a0b0',
    marginTop: 4,
    marginBottom: 30,
  },
});
```

