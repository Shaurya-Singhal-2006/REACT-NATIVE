// 1. Import the icon and clipboard tools used by this button.

import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
// 2. Haptics provides a short vibration after a successful copy.

import * as Haptics from 'expo-haptics';
// 3. Import the native elements used to create the button and alert.

import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
// 4. Meal describes each entry passed to this component.

import { Meal } from '@/storage/meal';
// 5. Use the shared primary color for the icon and label.

import { colors } from './7_global_styling';

// 6. The parent passes saved meals so this button can calculate their totals.

type CopyButtonProps = {
  // The list of meals whose values should be included in the copied summary.

  meals: Meal[];
};

// 7. Create a button that copies a readable nutrition summary to the clipboard.

export default function CopyButton({ meals }: CopyButtonProps) {
  // 8. Prepare the summary, copy it, then tell the user it worked.

  const handleCopy = async () => {
    // reduce visits each meal and combines its values into one totals object.

    const totals = meals.reduce(
      // Add the current meal's nutrition values to the running totals.

      (acc, meal) => ({
        // Add this meal's calories to the running calorie total.

        calories: acc.calories + meal.calories,
        // Add this meal's protein grams to the running protein total.

        protein: acc.protein + meal.protein,
        // Add this meal's carbohydrate grams to the running carb total.

        carbs: acc.carbs + meal.carbs,
        // Add this meal's fat grams to the running fat total.

        fat: acc.fat + meal.fat,
      }),
      // Start every total at zero before counting any meals.

      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );

    // Build a message; ${...} inserts values and \n creates line breaks.

    const summary = `MacroZone Daily Summary\n\nCalories: ${totals.calories}\nProtein: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`;

    // Await until the message has been written to the device clipboard.

    await Clipboard.setStringAsync(summary);
    // Give a success vibration and show a native confirmation dialog.

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    Alert.alert('Copied!', 'Macro summary copied to clipboard.');
  };

  return (
    // TouchableOpacity makes the row pressable; onPress calls handleCopy.

    <TouchableOpacity style={styles.button} onPress={handleCopy}>
      {/* Ionicons draws the copy symbol with the requested size and color. */}

      <Ionicons name='copy-outline' size={18} color={colors.primary} />
      {/* Text describes the action; styles.text controls its appearance. */}

      <Text style={styles.text}>Copy Summary</Text>
    </TouchableOpacity>
  );
}

// Keep the icon and label aligned as one horizontal button.

const styles = StyleSheet.create({
  button: {
    // Place the icon and label next to each other in a row.

    flexDirection: 'row',
    // Align the icon and label vertically through their centers.

    alignItems: 'center',
    // Leave a small gap between the icon and words.

    gap: 6,
    // Leave space above the button.

    marginTop: 16,
  },
  text: {
    // Use the app's bright primary color for the label.

    color: colors.primary,
    // Set the label's font size.

    fontSize: 14,
  },
});
