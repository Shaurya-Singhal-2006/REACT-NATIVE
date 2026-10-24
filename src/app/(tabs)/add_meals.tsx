// 1. Import the helper that saves a completed meal on the device.

import { addMeal } from '@/storage/meal';
// 2. Reuse the shared screen styles and colors.

import { globalStyles, colors } from '../../../components/7_global_styling';
// 3. Use Expo Router to navigate after a meal has been saved.

import { router } from 'expo-router';
// 4. useState remembers the current text in each form field.

import { useState } from 'react';
// 5. Haptics provides brief vibration feedback after a successful save.

import * as Haptics from 'expo-haptics';
// 6. Import the native elements used to build this screen.

import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// 7. This screen collects the details needed to save one meal.

export default function AddMealScreen() {
  // State value for the meal name; setName changes it when the user types.

  const [name, setName] = useState('');
  // State value for calories; it starts as text because TextInput returns text.

  const [calories, setCalories] = useState('');
  // State value for protein grams.

  const [protein, setProtein] = useState('');
  // State value for carbohydrate grams.

  const [carbs, setCarbs] = useState('');
  // State value for fat grams.

  const [fat, setFat] = useState('');

  // 8. Validate the form, save its values, clear it, and navigate home.

  const handleAddMeal = async () => {
    // Check the two required fields before trying to save anything.

    if (!name || !calories) {
      // Alert opens a native message box to tell the user what is missing.

      Alert.alert('Error', 'Please enter a meal name and calories.');
      // return stops this function so incomplete data is not saved.

      return;
    }

    // Call the storage helper and wait until it finishes writing to the device.

    await addMeal({
      // Save the entered name as text.

      name,
      // Convert the calories string to a number before saving it.

      calories: Number(calories),
      // Convert optional nutrient strings; use zero if the field is blank or invalid.

      protein: Number(protein) || 0,
      // Convert carbohydrate text; use zero when it is blank or invalid.

      carbs: Number(carbs) || 0,
      // Convert fat text; use zero when it is blank or invalid.

      fat: Number(fat) || 0,
    });

    // Reset each field to an empty string after the meal has been saved.

    setName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');

    // Show a confirmation message after a successful save.

    Alert.alert('Success', 'Meal added successfully!');
    // Ask the phone to give a short success vibration.

    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    // Navigate to the Home route so the updated totals can be seen.

    router.push('/');
  };

  return (
    // View groups this screen's content; the shared style adds background and spacing.

    <View style={globalStyles.container}>
      {/* Text displays the title; style applies the shared large-title appearance. */}

      <Text style={globalStyles.title}>Add Meal</Text>

      {/* Name TextInput: style controls appearance; placeholder is hint text;
          placeholderTextColor changes that hint's color; value connects it to state;
          onChangeText calls setName whenever the user edits the text. */}

      <TextInput
        style={styles.input}
        placeholder='Meal name'
        placeholderTextColor={colors.textSecondary}
        value={name}
        onChangeText={setName}
      />

      {/* Calories TextInput props: style applies the field design; placeholder is hint text;
          placeholderTextColor colors the hint; keyboardType requests a numeric keyboard;
          value reads calories state; onChangeText updates that state while the user types. */}

      <TextInput
        style={styles.input}
        placeholder='Calories'
        placeholderTextColor={colors.textSecondary}
        keyboardType='numeric'
        value={calories}
        onChangeText={setCalories}
      />

      {/* View groups the three optional nutrient inputs; row styles place them side by side. */}

      <View style={styles.row}>
        {/* Protein TextInput props: style applies both field and equal-row sizing;
            placeholder and placeholderTextColor show a hint; keyboardType asks for numbers;
            value reads protein state; onChangeText updates protein state as text is typed. */}

        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder='Protein (g)'
          placeholderTextColor={colors.textSecondary}
          keyboardType='numeric'
          value={protein}
          onChangeText={setProtein}
        />
        {/* Carbs TextInput uses the shared field styles and hint colors, requests a numeric
            keyboard, reads carbs state through value, and updates it with onChangeText. */}

        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder='Carbs (g)'
          placeholderTextColor={colors.textSecondary}
          keyboardType='numeric'
          value={carbs}
          onChangeText={setCarbs}
        />
        {/* Fat TextInput uses the shared field styles and hint colors, requests a numeric
            keyboard, reads fat state through value, and updates it with onChangeText. */}

        <TextInput
          style={[styles.input, styles.rowInput]}
          placeholder='Fat (g)'
          placeholderTextColor={colors.textSecondary}
          keyboardType='numeric'
          value={fat}
          onChangeText={setFat}
        />
      </View>

      {/* TouchableOpacity makes the button pressable; onPress runs the save function. */}

      <TouchableOpacity style={styles.button} onPress={handleAddMeal}>
        {/* Text shows the action label, styled with buttonText below. */}

        <Text style={styles.buttonText}>Add Meal</Text>
      </TouchableOpacity>
    </View>
  );
}

// 9. Create the local style object used by the input fields and button.

const styles = StyleSheet.create({
  // `input` is reused by each TextInput for the field's background and spacing.

  input: {
    // Use the app surface color behind the typed text.

    backgroundColor: colors.surface,
    // Use the main text color for the value typed by the user.

    color: colors.text,
    // Add equal inner space between the text and the field's edges.

    padding: 16,
    // Round the four corners of the field.

    borderRadius: 10,
    // Make entered text large enough to read comfortably.

    fontSize: 16,
    // Add space above each field.

    marginTop: 16,
  },
  // `row` puts the nutrient fields horizontally with a gap between them.

  row: {
    flexDirection: 'row',
    gap: 10,
  },
  // `rowInput` lets each nutrient input expand to fill an equal part of the row.

  rowInput: {
    flex: 1,
  },
  // `button` styles the save action as a large, centered pressable area.

  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  // `buttonText` controls the color, size, and boldness of the button label.

  buttonText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
