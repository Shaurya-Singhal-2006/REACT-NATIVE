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

