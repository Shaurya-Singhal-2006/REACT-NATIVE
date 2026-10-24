// 1. Import Expo's tools for requesting permission and scheduling notifications.

import * as Notifications from 'expo-notifications';

// 2. Configure how notifications should appear while this app is open.

Notifications.setNotificationHandler({
  // Expo calls this async function when it needs display choices.

  handleNotification: async () => ({
    // Allow a normal notification alert to appear.

    shouldShowAlert: true,
    // Allow the operating system to show a banner at the top of the screen.

    shouldShowBanner: true,
    // Allow the notification to appear in the notification list.

    shouldShowList: true,
    // Keep the notification quiet; do not play a sound.

    shouldPlaySound: false,
    // Do not change the app icon's unread-count badge.

    shouldSetBadge: false,
  }),
});

// 3. Ask the operating system for permission to send notifications.

export const requestPermissions = async (): Promise<boolean> => {
  // Request permission and read the resulting status from the response object.

  const { status } = await Notifications.requestPermissionsAsync();
  // Return true only when permission was granted; otherwise return false.

  return status === 'granted';
};

// 4. Replace old reminders with a daily lunch reminder and dinner reminder.

export const scheduleMealReminders = async () => {
  // Cancel old scheduled notifications first so this function does not duplicate them.

  await Notifications.cancelAllScheduledNotificationsAsync();

  // Schedule a repeating reminder for 12:00 each day.

  await Notifications.scheduleNotificationAsync({
    content: {
      // The bold heading shown with the notification.

      title: 'MacroZone',
      // The reminder text shown under the heading.

      body: "Don't forget to log your lunch!",
    },
    trigger: {
      // DAILY tells Expo to repeat this reminder every day.

      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      // Set the reminder hour to noon using the local 24-hour clock.

      hour: 12,
      // Set the reminder minute to zero.

      minute: 0,
    },
  });

  // Schedule a second repeating reminder for 18:00 (6 p.m.) each day.

  await Notifications.scheduleNotificationAsync({
    content: {
      // The bold heading shown with this notification.

      title: 'MacroZone',
      // The reminder text shown under the heading.

      body: 'Time to log your dinner!',
    },
    trigger: {
      // DAILY tells Expo to repeat this reminder every day.

      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      // Set the reminder hour to 18 using the local 24-hour clock.

      hour: 18,
      // Set the reminder minute to zero.

      minute: 0,
    },
  });
};

// 5. Cancel every scheduled notification created by this app.

export const cancelMealReminders = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
};
