// Beginner example: keep reusable style objects together with StyleSheet.create.

// StyleSheet helps organize styles; Text displays words and View groups elements.

import { StyleSheet, Text, View } from 'react-native';

// This component shows a title and date using named styles defined below.

export default function Stylesheet() {
  return (
    // View groups both text elements; styles.container controls the outside layout.

    <View style={styles.container}>
      {/* Text shows the name; styles.title sets its size, weight, and color. */}

      <Text style={styles.title}>SHAURYA SINGHAL</Text>
      {/* Text shows a date; styles.date sets its size, color, and spacing. */}

      <Text style={styles.date}>Monday, March 16</Text>
    </View>
  );
}

// Create one object holding the styles used by the elements above.

const styles = StyleSheet.create({
  // These properties style the main container that holds both text elements.

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
