// 1. Import the shared colors used by the bottom navigation bar.

import { colors } from '../../../components/7_global_styling';
// 2. Import Ionicons, a collection of ready-made interface icons.

import { Ionicons } from '@expo/vector-icons';
// 3. Import Expo Router's Tabs component for bottom navigation.

import { Tabs } from 'expo-router';

// 4. Configure the appearance and destinations of the bottom tab bar.

export default function TabLayout() {
  return (
    // Tabs creates the navigation bar and hosts the screen selected by the user.

    <Tabs
      screenOptions={{
        // Hide the stack header above each individual tab.

        headerShown: false,
        tabBarStyle: {
          // Give the bar the app background color and a subtle top border.

          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        // Use the bright primary color for the selected tab and muted color otherwise.

        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      {/* This tab opens index.tsx; `title` is its label and `tabBarIcon` draws its icon. */}

      <Tabs.Screen
        name='index'
        options={{
          // Show this title and a home-shaped icon in the tab bar.

          title: 'Home',
          // Expo supplies the selected/unselected color and icon size to this function.

          tabBarIcon: ({ color, size }) => (
            // Ionicons displays the home icon using the values supplied above.

            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='add_meals'
        options={{
          // This tab opens the add_meals.tsx form; its icon function draws a plus symbol.

          title: 'Add Meal',
          // Expo supplies the correct size and selected state color for this icon.

          tabBarIcon: ({ color, size }) => (
            // Ionicons displays a plus-in-a-circle symbol.

            <Ionicons name='add-circle' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='meals'
        options={{
          // This tab opens meals.tsx; its icon function draws a list symbol.

          title: 'All Meals',
          // Expo supplies the correct size and selected state color for this icon.

          tabBarIcon: ({ color, size }) => (
            // Ionicons displays the list icon beside this tab's title.

            <Ionicons name='list' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
