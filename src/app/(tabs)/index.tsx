// 1. Import native elements used to build the Home screen.

import { Text, ScrollView, StyleSheet, View, Platform } from 'react-native';
// 2. Import Link, which navigates to another route when pressed.

import { Link } from 'expo-router';

// 3. Import the focus hook so this screen can refresh when it becomes active.

import { useFocusEffect } from 'expo-router';
// 4. useState stores screen data; useCallback keeps a function stable between renders.

import { useCallback, useState } from 'react';
// 5. Import the numbered lessons so they can be tried on this screen if uncommented.

import HomeScreen from '../../../components/1_basic_text';
import DeviceInfo from '../../../components/2_device_info';
import InlineStyle from '../../../components/3_inline_style';
import Stylesheet from '../../../components/4_stylesheet';
// 6. Import shared styles and colors for consistent screen appearance.

import { globalStyles, colors } from '../../../components/7_global_styling';
// 7. Import reusable pieces of the Home dashboard.

import HomeHeader from '../../../components/8_home_header';
import MacroGrid from '../../../components/10_MacroGrid';
import RecentMeals from '../../../components/12_RecentMeals';
// 8. Import the meal reader and the TypeScript type describing each meal.

import { getMeals, Meal } from '@/storage/meal';
import ShareButton from '../../../components/13_sharebutton';
import CopyButton from '../../../components/14_copybutton';
import ReminderToggle from '../../../components/15_remindertoggler';

// 9. Home screen: load saved meals and show totals and recent entries.

export default function Index() {
  // Keep the current meal list in state so the screen updates when it changes.

  const [meals, setMeals] = useState<Meal[]>([]);

  // Read the saved list and copy it into state for the dashboard to display.

  const loadMeals = async () => {
    // Wait for the storage helper to return the saved list.

    const data = await getMeals();
    // Update state; React then renders the screen again with the new list.

    setMeals(data);
    // Print the loaded list for debugging in the developer console.

    console.log('Loaded meals:', data);
  };

  // Run a refresh whenever the user opens or returns to the Home tab.

  useFocusEffect(
    // useCallback keeps this callback stable; [] means it uses no changing dependencies.

    useCallback(() => {
      // Load the stored data when the Home screen receives focus.

      loadMeals();
    }, []),
  );

  return (
    // Fragment groups the screen elements without adding another native View.

    <>
      {/* HomeScreen is a lesson example; uncomment its tag to show its text. */}
      {/* <HomeScreen></HomeScreen> */}

      {/* DeviceInfo is a lesson example; uncomment its tag to show device details. */}
      {/* <DeviceInfo></DeviceInfo> */}

      {/* InlineStyle is a lesson example for styling directly on a tag. */}
      {/* <InlineStyle></InlineStyle> */}

      {/* Stylesheet is a lesson example for styles created with StyleSheet.create. */}
      {/* <Stylesheet></Stylesheet> */}

      {/* ScrollView lets the dashboard move vertically when it is taller than the screen. */}

      <ScrollView style={globalStyles.container}>
        {/* View groups the title and share action in a horizontal header row. */}

        <View style={globalStyles.header}>
          {/* Text displays the Home title with the shared title style. */}

          <Text style={globalStyles.title}>Home</Text>
          {/* ShareButton receives meals so it can calculate and share their totals. */}

          <ShareButton meals={meals} />
        </View>

        {/* HomeHeader displays today's formatted date. */}

        <HomeHeader></HomeHeader>

        {/* MacroGrid receives the list and displays its nutrition totals. */}

        <MacroGrid meals={meals} />

        {/* CopyButton receives the list so it can copy a nutrition summary. */}

        <CopyButton meals={meals} />

        {/* ReminderToggle can be shown by uncommenting this example JSX expression. */}
        {/* {Platform.OS !== 'android' && <ReminderToggle />} */}

        {/* RecentMeals shows recent entries and calls loadMeals after an item is deleted. */}

        <RecentMeals meals={meals} onDelete={loadMeals} />

        {/* This Link's href selects the All Meals route; style controls its text appearance.
            It has no child text, so no visible label appears. */}

        <Link href='/meals' style={{ fontSize: 18, color: '#007bff' }} />

        {/* This Link selects the Add Meal route; it is also empty and has no visible label. */}

        <Link href='/add_meals' style={{ fontSize: 18, color: '#007bff' }} />
      </ScrollView>
    </>
  );
}

