// Beginner example: put a small JavaScript style object directly on an element.

// Text and View are basic building blocks for a React Native screen.

import { Text, View } from 'react-native';

// This component centers one line of text using inline styles.

export default function InlineStyle() {
  return (
    // View groups the content. Its inline style fills space and centers children.

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Text displays the name inside the centered View. */}

      <Text>SHURYA SINGHAL</Text>
    </View>
  );
}
