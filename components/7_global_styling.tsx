// StyleSheet helps store style objects in one organized place.

import { StyleSheet } from 'react-native';

// Shared colors and styles let different screens use the same visual design.

// Export the color names so any file can import and reuse these exact colors.

export const colors = {
  // Main background behind app screens.

  background: '#1a1a2e',
  // Background color for header areas.

  header: '#242444',
  // Background color for cards and input surfaces.

  surface: '#2a2a4a',
  // Bright accent used for selected and interactive elements.

  primary: '#4fc3f7',
  // Main foreground color for readable text.

  text: '#ffffff',
  // Softer foreground color for supporting text.

  textSecondary: '#a0a0b0',
  // Color used to draw attention to alert actions.

  alert: '#ff5252',
};

// Export styles for common screen pieces such as containers, titles, and headers.

export const globalStyles = StyleSheet.create({
  // This style fills available space and adds background color and inner spacing.

  container: {
    // Fill the available screen space.

    flex: 1,
    // Use the shared dark background.

    backgroundColor: colors.background,
    // Add space inside the top and left/right edges.

    paddingTop: 60,
    paddingHorizontal: 20,
  },
  // Large bold text used as a screen title.

  title: {
    // Make the title larger than normal body text.

    fontSize: 28,
    // Make the title bold.

    fontWeight: 'bold',
    // Use the primary readable text color.

    color: colors.text,
  },
  // A smaller section heading with space around it.

  sectionTitle: {
    // Use a heading-sized font.

    fontSize: 18,
    // Use a medium-heavy font weight.

    fontWeight: '600',
    // Use the muted text color for section headings.

    color: colors.textSecondary,
    // Leave space above the section heading.

    marginTop: 30,
    // Leave space below the section heading.

    marginBottom: 16,
  },
  // Muted text shown when a list has no items.

  empty: {
    // Use secondary text color for a less prominent message.

    color: colors.textSecondary,
    // Set a normal body-text size.

    fontSize: 14,
  },
  // Lay out a title and another element side by side, with space between them.

  header: {
    // Lay children out left to right.

    flexDirection: 'row',
    // Put free space between the children.

    justifyContent: 'space-between',
    // Align their centers along the vertical direction.

    alignItems: 'center',
  },
});
