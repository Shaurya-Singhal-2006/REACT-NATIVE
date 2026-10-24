// These React Native elements build the list and its section heading.

import { StyleSheet, Text, View } from 'react-native';
// Meal gives TypeScript the shape of each meal in the array.

import { Meal } from '@/storage/meal';
// Reuse the same row component shown on the All Meals screen.

import MealItem from './11_MealItem';

// 4. The parent supplies the list and a function to call after an item is deleted.

type RecentMealsProps = {
  // meals contains the saved meal rows to display.

  meals: Meal[];
  // onDelete lets the parent reload its list after a row is removed.

  onDelete: () => void;
};

// 5. Show up to five recent meals, or a message when there are none.

export default function RecentMeals({ meals, onDelete }: RecentMealsProps) {
  return (
    // View groups the section heading and meal list with space above them.

    <View style={{ marginTop: 30 }}>
      {/* Text labels the section; styles.sectionTitle sets its appearance. */}

      <Text style={styles.sectionTitle}>Recent Meals</Text>
      {/* Show an empty message for no meals; otherwise show up to five rows. */}

      {meals.length === 0 ? (
        // Text tells the user there are no saved meals to display.

        <Text style={styles.empty}>No meals logged yet.</Text>
      ) : (
        // slice(0, 5) selects at most five entries, and map makes a row for each one.

        meals
          .slice(0, 5)
          .map((meal) => (
            // MealItem receives the meal data; key helps React track this row;
            // onDelete passes the parent's refresh function down to the row.

            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={onDelete}
            />
          ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    // Use a heading-sized font.

    fontSize: 18,
    // Make the section name slightly bold.

    fontWeight: '600',
    // Use bright text so the heading is easy to read.

    color: '#ffffff',
    // Leave room below the heading before the first meal row.

    marginBottom: 16,
  },
  empty: {
    // Use muted text for the empty-state message.

    color: '#a0a0b0',
    // Set a readable body-text size.

    fontSize: 14,
  },
});
