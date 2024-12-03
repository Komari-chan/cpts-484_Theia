import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <View style={styles.buttonContainer}>
            <Button
              title="Navigation Assistance"
              onPress={() => navigation.navigate('NavigationAssistance')}
            />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="System Settings"
          onPress={() => navigation.navigate('Settings')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Emergency Alert"
          onPress={() => navigation.navigate('EmergencyAlert')}
        />
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly', // Distribute buttons evenly across the screen
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%', // Adjust button width
    height: Dimensions.get('screen').height / 4, // Each button fills 1/4 of the screen height
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

