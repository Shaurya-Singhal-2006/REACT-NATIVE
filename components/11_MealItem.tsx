// Alert shows confirmation messages, Text shows content, and TouchableOpacity handles taps.

import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
// deleteMeal removes the selected meal from saved storage.

import { deleteMeal } from '@/storage/meal';
// Use the app's shared colors for the meal row.

import { colors } from './7_global_styling';
// Haptics can make the phone vibrate briefly after a successful delete.

import * as Haptics from 'expo-haptics';

// 5. List the information the parent screen must provide to a MealItem.

type MealItemProps = {
  // id identifies the exact saved meal to delete.

  id: string;
  // name is displayed as the row's heading and in the confirmation question.

  name: string;
  // These four numbers are displayed as the nutrition summary.

  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  // onDelete tells the parent screen to refresh after this item is removed.

  onDelete: () => void;
};

// 6. Display one meal row and ask for confirmation when it is held down.

export default function MealItem({
  id,
  name,
  calories,
  protein,
  carbs,
  fat,
  onDelete,
}: MealItemProps) {
  // 7. This function runs after a long press on the meal row.

  const handleLongPress = () => {
    // Alert opens a native dialog with a title, a question, and two action buttons.

    Alert.alert('Delete Meal', `Are you sure you want to delete "${name}"?`, [
      // Cancel closes the dialog and makes no changes.

      { text: 'Cancel', style: 'cancel' },
      {
        // Delete is styled as a destructive action and calls this async function.

        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          // Remove the meal whose ID was passed to this row.

          await deleteMeal(id);
          // Give short success feedback using the phone's vibration feature.

          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          // Ask the parent screen to read storage again and refresh its list.

          onDelete();
        },
      },
    ]);
  };

  return (
    // TouchableOpacity makes the whole row pressable; onLongPress runs the delete dialog.

    <TouchableOpacity style={styles.container} onLongPress={handleLongPress}>
      {/* Text displays the meal name; styles.name controls its font and color. */}

      <Text style={styles.name}>{name}</Text>
      {/* Text displays calories and grams of protein (P), carbs (C), and fat (F). */}

      <Text style={styles.macros}>
        {calories} cal • {protein}g P • {carbs}g C • {fat}g F
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // Set the row's card background.

    backgroundColor: colors.surface,
    // Round the card's corners.

    borderRadius: 10,
    // Add space inside the row around its text.

    padding: 16,
    // Separate this row from the next meal row.

    marginBottom: 10,
  },
  name: {
    // Make the meal name easy to spot.

    fontSize: 16,
    // Use a medium-bold font weight.

    fontWeight: '600',
    // Use the main readable text color.

    color: colors.text,
  },
  macros: {
    // Use a smaller font for supporting nutrition details.

    fontSize: 13,
    // Use the muted text color for supporting details.

    color: colors.textSecondary,
    // Separate this line slightly from the name above.

    marginTop: 4,
  },
});
