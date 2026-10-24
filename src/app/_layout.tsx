// 1. Import Expo Router's Stack navigator, which shows one screen at a time.

import { Stack } from 'expo-router';

// 2. Expo Router calls this special file to build the app's top-level navigation.

export default function RootLayout() {
  return (
    // Stack is the top-level navigation container for this app.

    <Stack screenOptions={{ headerShown: false }}>
      {/* `screenOptions` hides the stack header; this screen entry loads the tab group. */}

      <Stack.Screen name='(tabs)' />
    </Stack>
  );
}
