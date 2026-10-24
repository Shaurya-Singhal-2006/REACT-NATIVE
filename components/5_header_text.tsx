// Learning example: change the navigation header title with screen options.

// Stack is Expo Router's navigator for screens arranged one above another.

import { Stack } from 'expo-router';

// This component configures a stack header title for its screen.

export default function headerlayout() {
  return (
    // Stack creates the header; screenOptions configures the header for its screens.

    <Stack
      screenOptions={{
        // headerTitle replaces the default header text with this name.

        headerTitle: 'SHAURYA SINGHAL',
      }}
    />
  );
}
