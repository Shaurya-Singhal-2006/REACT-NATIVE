// StyleSheet stores styles; Text displays words; View groups the card contents.

import { StyleSheet, Text, View } from 'react-native';

// TypeScript checks that callers provide each value this card needs.

type MacroCardProps = {
  // label is the short name shown at the top of the card.

  label: string;
  // value is the current total shown in large text.

  value: string;
  // goal is the target shown underneath the current total.

  goal: string;
  // color is used for the colored strip on the card's left edge.

  color: string;
};

// Display one nutrient name, its current amount, and its goal amount.

export default function MacroCard({
  label,
  value,
  goal,
  color,
}: MacroCardProps) {
  return (
    // View is the card container; the array combines its base style and custom border color.

    <View style={[styles.card, { borderLeftColor: color }]}>
      {/* Show the nutrient name, for example Calories or Protein. */}

      <Text style={styles.label}>{label}</Text>
      {/* Show the current amount in a larger font. */}

      <Text style={styles.value}>{value}</Text>
      {/* Show the target amount underneath the current amount. */}

      <Text style={styles.goal}>/ {goal}</Text>
    </View>
  );
}

// These named styles control the card and each line of text inside it.

const styles = StyleSheet.create({
  card: {
    // Set the card background color.

    backgroundColor: '#16213e',
    // Round the corners.

    borderRadius: 12,
    // Leave space between the content and the card edges.

    padding: 16,
    // Make each card a little less than half the row width.

    width: '47%',
    // Draw the colored stripe whose color is provided by the caller.

    borderLeftWidth: 4,
  },
  label: {
    // Use a small heading size for the nutrient name.

    fontSize: 14,
    // Use muted color for the label.

    color: '#a0a0b0',
  },
  value: {
    // Make the current amount prominent.

    fontSize: 28,
    // Make the amount bold.

    fontWeight: 'bold',
    color: '#ffffff',
    // Leave room between the label and amount.

    marginTop: 4,
  },
  goal: {
    // Keep the target at regular body size.

    fontSize: 14,
    // Use muted color for the target.

    color: '#a0a0b0',
    // Add a tiny gap above the goal.

    marginTop: 2,
  },
});
