import React from 'react';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* Ensure the screen name matches the file name */}
      <Stack.Screen name="hellow" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="editposts" options={{ headerShown: false }} />
    </Stack>
  );
}
