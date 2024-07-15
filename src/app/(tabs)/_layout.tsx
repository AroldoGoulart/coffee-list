import { Tabs } from 'expo-router';
import React from 'react';

import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '@/providers/lib/theme/colors';
import { useColorMode } from 'native-base';

export default function TabLayout() {
  const { colorMode } = useColorMode()
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorMode === 'dark' ? Colors.primary[300] : Colors.primary[500],
        tabBarInactiveBackgroundColor: colorMode === 'dark' ? Colors.bgDark : Colors.bgLight,
        tabBarActiveBackgroundColor: colorMode === 'dark' ? Colors.bgDark : Colors.bgLight,
        headerTintColor: Colors.primary[500],
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={28}
              name={focused ? 'home' : 'home-outline'}
              style={[{ marginBottom: -3 }]} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons size={28}
              name={focused ? 'settings' : 'settings-outline'}
              style={[{ marginBottom: -3 }]} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
