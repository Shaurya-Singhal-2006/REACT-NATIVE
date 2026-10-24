// 1. Ionicons draws the share symbol; Share opens the phone's sharing menu.

import { Ionicons } from '@expo/vector-icons';
import { Share, TouchableOpacity } from 'react-native';
// 2. Meal describes each entry supplied to this component.

import { Meal } from '@/storage/meal';
// 3. Reuse the shared accent color for the icon.

import { colors } from './7_global_styling';

// 4. The parent must pass the meals so the summary can include their totals.

type ShareButtonProps = {
  // The list of meals whose nutrition totals should be included in the share text.

  meals: Meal[];
};

// 5. Make a pressable icon that shares a text summary of the meals.

export default function ShareButton({ meals }: ShareButtonProps) {
  // 6. Add up nutrition values and ask the phone to share the summary.

  const handleShare = async () => {
    // reduce walks through the array and returns one totals object.

    const totals = meals.reduce(
      // For each meal, return new totals by adding this meal's values.

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

    // Share.share opens the phone's share sheet with this message prefilled.

    await Share.share({
      message: `shaurya Daily Summary\n\nCalories: ${totals.calories}\nProtein: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`,
    });
  };

  return (
    // TouchableOpacity makes the icon pressable; onPress runs handleShare.

    <TouchableOpacity onPress={handleShare}>
      {/* Ionicons draws the share symbol; name, size, and color set its appearance. */}

      <Ionicons name='share-outline' size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
