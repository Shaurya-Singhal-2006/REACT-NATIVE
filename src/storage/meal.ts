// 1. Import the phone's simple key/value storage tool.

import AsyncStorage from '@react-native-async-storage/async-storage';

// 2. Describe the exact data shape used for every saved meal.

export type Meal = {
  // A unique text ID identifies this meal when it is read or deleted.

  id: string;
  // The meal's name, entered by the person using the app.

  name: string;
  // These nutrition amounts are numbers so totals can be calculated.

  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  // The creation date and time, written as an ISO date string.

  createdAt: string;
};

// 3. Use this storage key as the label for the entire list of meals.

const MEALS_KEY = 'meals';

// 4. Read all meals. `async` lets this function wait for device storage.

export const getMeals = async (): Promise<Meal[]> => {
  // Ask storage for the text saved under our meals key; wait until it answers.

  const data = await AsyncStorage.getItem(MEALS_KEY);
  // If text exists, parse it into meal objects; otherwise use an empty array.

  return data ? JSON.parse(data) : [];
};

// 5. Save one meal. `Omit` means the caller does not need to provide ID or date.

export const addMeal = async (
  // Accept the meal's nutrition fields but leave generated fields to this function.

  meal: Omit<Meal, 'id' | 'createdAt'>,
  // Promise<Meal> tells TypeScript this async function eventually returns a Meal.
): Promise<Meal> => {
  // First load the current list so this save keeps the meals already stored.

  const meals = await getMeals();
  // Build a new object from the entered details and add its generated fields.

  const newMeal: Meal = {
    // Copy all provided fields (name and nutrition values) into this object.

    ...meal,
    // Use the current time in milliseconds as a simple unique text ID.

    id: Date.now().toString(),
    // Save the current date and time in a standard machine-readable format.

    createdAt: new Date().toISOString(),
  };
  // Put the new meal first, convert the array to JSON text, and save that text.

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify([newMeal, ...meals]));
  // Return the new meal in case the calling screen needs to use it.

  return newMeal;
};

// 6. Delete one meal by its unique ID.

export const deleteMeal = async (id: string): Promise<void> => {
  // Read the current list before changing it.

  const meals = await getMeals();
  // Keep every meal whose ID is different from the ID we want to delete.

  const filtered = meals.filter((meal) => meal.id !== id);
  // Replace the stored list with the filtered list.

  await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(filtered));
};

// 7. Delete the complete list of saved meals.

export const clearAllMeals = async (): Promise<void> => {
  // Remove the storage entry instead of saving an empty array.

  await AsyncStorage.removeItem(MEALS_KEY);
};
