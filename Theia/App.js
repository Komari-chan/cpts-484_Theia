import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen'; // Home Screen
import ApplicationSettings from './src/screens/ApplicationSettings'; // Settings Screen
import EmergencyAlert from './src/screens/EmergencyAlert'; // Emergency Alert Screen
import NavigationAssistance from './src/screens/NavigationAssistance';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Theia', // Header title
          }}
        />

        {/* Navigation Assistance Screen */}
        <Stack.Screen
          name="NavigationAssistance"
          component={NavigationAssistance}
          options={{ title: 'Navigation Assistance' }}
        />

        {/* Application Settings Screen */}
        <Stack.Screen
          name="Settings"
          component={ApplicationSettings}
          options={{
            title: 'Settings',
          }}
        />

        {/* Emergency Alert Screen */}
        <Stack.Screen
          name="EmergencyAlert"
          component={EmergencyAlert}
          options={{
            title: 'Emergency Alert',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
