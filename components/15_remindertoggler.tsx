// 1. AsyncStorage remembers the setting after the app is closed.

import AsyncStorage from '@react-native-async-storage/async-storage';
// 2. useEffect runs setup code when displayed; useState stores changing values.

import { useEffect, useState } from 'react';
// 3. Import elements for the label, switch, layout, and messages.

import { Alert, StyleSheet, Switch, Text, View } from 'react-native';
// 4. Use the same shared colors as the rest of the app.

import { colors } from './7_global_styling';
// 5. Import helpers that request permission and create or cancel reminders.

import {
  cancelMealReminders,
  requestPermissions,
  scheduleMealReminders,
} from '@/utils/notification';

// 6. This key is the storage label for the on/off reminder setting.

const REMINDERS_KEY = 'remindersEnabled';

// 7. Show a switch that enables or disables the meal reminder schedule.

export default function ReminderToggle() {
  // enabled controls the switch position; setEnabled updates that position.

  const [enabled, setEnabled] = useState(false);
  // loading tracks an in-progress operation; setLoading prevents repeated taps.

  const [loading, setLoading] = useState(false);

  // 8. On first display, read the previously saved switch setting.

  useEffect(() => {
    // Define an async helper because reading storage takes time.

    const load = async () => {
      try {
        // Read the stored text value using the reminder key.

        const val = await AsyncStorage.getItem(REMINDERS_KEY);
        // Turn the setting on only if its saved text is exactly 'true'.

        setEnabled(val === 'true');
      } catch (error) {
        // Log a helpful message if the device could not read the setting.

        console.error('Failed to load reminder settings:', error);
      }
    };

    // Start loading the saved value when the effect runs.

    load();
    // An empty dependency list means this setup runs once when mounted.
  }, []);

  // 9. Respond to the on/off value selected by the user.

  const toggle = async (value: boolean) => {
    // Ignore another tap if an earlier toggle request is still running.

    if (loading) return;

    // Mark the switch as busy so the UI can disable it.

    setLoading(true);

    try {
      // To enable reminders, first ask the operating system for permission.

      if (value) {
        const granted = await requestPermissions();

        if (!granted) {
          // Alert explains why reminders cannot be enabled without permission.

          Alert.alert(
            'Permission Required',
            'Please allow notifications to enable meal reminders.',
          );
          return;
        }

        await scheduleMealReminders();
      } else {
        // When switching off, cancel notifications that were already scheduled.

        await cancelMealReminders();
      }

      // Save the setting as text and update the displayed switch state.

      await AsyncStorage.setItem(REMINDERS_KEY, String(value));
      setEnabled(value);
    } catch (error) {
      // Log details for a developer if a permission or storage action fails.

      console.error('Failed to update meal reminders:', error);

      // Alert tells the user that the reminder setting could not be changed.

      Alert.alert(
        'Error',
        'Unable to update meal reminders. Please try again.',
      );
    } finally {
      // Always clear the busy state so the user can try again.

      setLoading(false);
    }
  };

  return (
    // View groups the setting label and switch into one horizontal row.

    <View style={styles.container}>
      {/* Text names the setting; styles.label controls the words' appearance. */}

      <Text style={styles.label}>Meal Reminders</Text>

      {/* Switch props: value sets its position; onValueChange handles taps;
          disabled prevents taps while busy; trackColor sets off and on colors. */}

      <Switch
        value={enabled}
        onValueChange={toggle}
        disabled={loading}
        trackColor={{
          false: colors.surface,
          true: colors.primary,
        }}
      />
    </View>
  );
}

// Style the row so its label and switch sit on opposite sides.

const styles = StyleSheet.create({
  container: {
    // Put the label and switch on the same horizontal line.

    flexDirection: 'row',
    // Push the label and switch to opposite ends of the row.

    justifyContent: 'space-between',
    // Align both controls through their vertical centers.

    alignItems: 'center',
    // Leave space above the reminder setting.

    marginTop: 30,
  },
  label: {
    // Use the main text color and a comfortable readable size.

    color: colors.text,
    // Set a comfortable label size.

    fontSize: 16,
  },
});
