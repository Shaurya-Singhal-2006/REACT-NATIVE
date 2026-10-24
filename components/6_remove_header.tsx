// Learning example: hide a navigation header with the headerShown option.

// Stack represents screens arranged in a navigation stack.

import { Stack } from 'expo-router';

// This component returns a stack whose navigation header is hidden.

export default function Remove_header() {
  // Return a Stack tag and pass it options to control the navigation header.

  return (
    <Stack
      screenOptions={{
        // screenOptions is the set of display settings; false hides the header.

        headerShown: false,
      }}
    />
  );
}
