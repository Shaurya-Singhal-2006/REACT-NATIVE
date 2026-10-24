// StyleSheet defines the grid layout; View is the container around the cards.

import { StyleSheet, View } from 'react-native';
// Meal describes the saved meal data that will be added together here.

import { Meal } from '@/storage/meal';
// Each individual card is drawn by the smaller MacroCard component.

import MacroCard from './9_MacroCard';

// 4. Tell TypeScript that this component needs a list of Meal objects in its meals prop.

type MacroGridProps = {
  // The full meal list is used to calculate each total.

  meals: Meal[];
};

// 5. Add up the nutrition values and display the totals in four cards.

export default function MacroGrid({ meals }: MacroGridProps) {
  // reduce visits every meal and builds one running total object.

  const totals = meals.reduce(
    // This callback receives the running totals (`acc`) and the current meal.

    (acc, meal) => ({
      // Add this meal's calories to the previous calorie total.

      calories: acc.calories + meal.calories,
      // Add this meal's protein grams to the previous protein total.

      protein: acc.protein + meal.protein,
      // Add this meal's carbohydrate grams to the previous carb total.

      carbs: acc.carbs + meal.carbs,
      // Add this meal's fat grams to the previous fat total.

      fat: acc.fat + meal.fat,
    }),
    // Start all totals at zero before visiting the first meal.

    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  return (
    // View is the grid container; styles.grid tells its children how to wrap.

    <View style={styles.grid}>
      {/* Calories card: label names the value, value is this total, goal is the target,
          and color selects the left stripe color. */}

      <MacroCard
        label='Calories'
        value={`${totals.calories}`}
        goal='2,000'
        color='#ff6b6b'
      />
      {/* Protein card receives the protein total and its gram-based daily target. */}

      <MacroCard
        label='Protein'
        value={`${totals.protein}g`}
        goal='150g'
        color='#4ecdc4'
      />
      {/* Carbs card receives the carbohydrate total and its gram-based target. */}

      <MacroCard
        label='Carbs'
        value={`${totals.carbs}g`}
        goal='250g'
        color='#ffd93d'
      />
      {/* Fat card receives the fat total and its gram-based target. */}

      <MacroCard
        label='Fat'
        value={`${totals.fat}g`}
        goal='65g'
        color='#6bcb77'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    // Lay cards out horizontally before wrapping them to another line.

    flexDirection: 'row',
    // Allow cards to move onto a new line when there is not enough width.

    flexWrap: 'wrap',
    // Leave space between neighboring cards.

    gap: 12,
  },
});
