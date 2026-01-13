/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import DashboardScreen from './src/screens/DashboardScreen/DashboardScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import JournalScreen from './src/screens/JournalScreen/JournalScreen';
import { ThemeProvider, useTheme } from './src/theme/theme';
import { JournalEntry } from './src/types/journal';
import { RootStackParamList } from './src/types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContent = () => {
  const { theme } = useTheme();
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const handleSubmitEntry = (text: string) => {
    const entry: JournalEntry = {
      id: `${Date.now()}`,
      content: text.trim(),
      createdAt: new Date().toISOString(),
    };

    setEntries(prev => [entry, ...prev]);
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <SafeAreaView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home">
              {props => <HomeScreen {...props} entriesCount={entries.length} />}
            </Stack.Screen>
            <Stack.Screen name="Journal">
              {props => (
                <JournalScreen {...props} onSubmit={handleSubmitEntry} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Dashboard">
              {props => <DashboardScreen {...props} entries={entries} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
