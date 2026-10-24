// 1. Reuse the component that displays one meal row.

import MealItem from '../../../components/11_MealItem';
// 2. Import storage actions and the type used for each meal.

import { clearAllMeals, getMeals, Meal } from '@/storage/meal';
// 3. Reuse shared screen, title, and empty-state styles.

import { globalStyles } from '../../../components/7_global_styling';
// 4. Import the hook that refreshes the list whenever this tab becomes active.

import { useFocusEffect } from 'expo-router';
// 5. useState stores meals; useCallback keeps a function stable between renders.

import { useCallback, useState } from 'react';
// 6. Import the native elements used by this screen.

import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

// 7. Display every saved meal and provide an action to remove the full list.

export default function AllMealsScreen() {
  // Store the meals currently shown; setMeals replaces the list and redraws the screen.

  const [meals, setMeals] = useState<Meal[]>([]);

  // Read storage and update the state with the newest saved list.

  const loadMeals = async () => {
    // Wait for the saved meal array to be read from the device.

    const data = await getMeals();
    // Save the result in state so React displays the latest meals.

    setMeals(data);
  };

  // Delete all saved meals, then reload the list shown on screen.

  const handleClearAll = async () => {
    // Remove the saved list from local device storage.

    await clearAllMeals();
    // Read storage again so the screen now shows the empty state.

    loadMeals();
  };

  // Refresh the list each time the user opens or returns to this tab.

  useFocusEffect(
    // useCallback memoizes this function; [] says it has no changing dependencies.

    useCallback(() => {
      // Update the screen from the device's current saved data.

      loadMeals();
    }, []),
  );

  return (
    // ScrollView lets the list move vertically if it is taller than the screen.

    <ScrollView style={globalStyles.container}>
      {/* View groups the screen title and Clear All action in one header row. */}

      <View style={globalStyles.header}>
        {/* Text displays the page heading using the shared title style. */}

        <Text style={globalStyles.title}>All Meals</Text>
        {/* TouchableOpacity makes the text pressable; onPress starts the clear action. */}

        <TouchableOpacity onPress={handleClearAll}>
          {/* Text displays the button label and receives its red action style. */}

          <Text style={styles.clearButton}>Clear All</Text>
        </TouchableOpacity>
      </View>
      {/* View groups the empty message or meal rows and adds space above them. */}

      <View style={{ marginTop: 30 }}>
        {/* If the list is empty, show a message; otherwise create one row per meal. */}

        {meals.length === 0 ? (
          // Text explains that the list has no saved meals yet.

          <Text style={globalStyles.empty}>No meals logged yet.</Text>
        ) : (
          // map returns a MealItem tag for each meal in the array.

          meals.map((meal) => (
            // `key` helps React track this row; `id` identifies the stored meal to delete;
            // name and nutrition props provide the row text; onDelete refreshes this list.

            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={loadMeals}
            />
          ))
        )}
      </View>
    </ScrollView>
  );
}

// 8. Define the small style used by the Clear All label.

const styles = {
  clearButton: {
    // Red makes this destructive action easy to recognize.

    color: 'red',
    // Set a readable label size.

    fontSize: 16,
  },
};
