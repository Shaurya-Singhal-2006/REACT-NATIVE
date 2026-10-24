// StyleSheet organizes the date's local style; Text and View create the display.

import { StyleSheet, Text, View } from 'react-native';

// Reuse the app's shared header layout and text color.

import { globalStyles, colors } from './7_global_styling';

// Show today's date in a readable weekday, month, and day format.

export default function HomeHeader() {
  // Create a Date for now, then format it as a human-readable date string.

  const currentDate = new Date().toLocaleDateString('en-US', {
    // Ask for a full weekday name, a full month name, and a numeric day.

    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    // View groups the date text and uses the same row layout as other headers.

    <View style={globalStyles.header}>
      {/* Text displays the formatted date; styles.date controls how it looks. */}

      <Text style={styles.date}>{currentDate}</Text>
    </View>
  );
}

// Keep the date's text appearance in one reusable style object.

const styles = StyleSheet.create({
  date: {
    // Use a small body-text size for the date.

    fontSize: 14,
    // Use the shared main text color.

    color: colors.text,
    // Add a little space above the date.

    marginTop: 4,
    // Add space below the date before the next section.

    marginBottom: 30,
  },
});
