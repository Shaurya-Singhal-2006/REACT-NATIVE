// Beginner example: show a short piece of text on the screen.

// Import Text to display words and View to group elements on the screen.

import { Text, View } from 'react-native';

// A React component is a function that returns the screen elements to display.

export default function HomeScreen() {
  return (
    // View is a container that can later hold multiple screen elements.

    <View>
      {/* Text draws the words between its opening and closing tags. */}

      <Text>LEARNING REACT NATIVE !!</Text>
    </View>
  );
}
