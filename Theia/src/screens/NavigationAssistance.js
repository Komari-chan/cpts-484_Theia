import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const NavigationAssistance = () => {
  const userLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const turnMarker = {
    latitude: 37.78925,
    longitude: -122.4324,
  };

  const destination = {
    latitude: 37.79025,
    longitude: -122.4334,
  };

  const instructions = "Proceed 100 meters ahead, then turn right at the intersection.";

  return (
    <View style={styles.container}>
      {/* Map occupying the top 2/3 of the screen */}
      <MapView
        style={styles.map}
        initialRegion={{
          ...userLocation,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* User Location */}
        <Marker coordinate={userLocation} title="You" pinColor="blue" />

        {/* Next Turn */}
        <Marker coordinate={turnMarker} title="Turn Right" pinColor="orange" />

        {/* Destination */}
        <Marker coordinate={destination} title="Destination" pinColor="green" />

        {/* Path */}
        <Polyline
          coordinates={[userLocation, turnMarker, destination]}
          strokeColor="#00f"
          strokeWidth={3}
        />
      </MapView>

      {/* Directions and Speaker Button */}
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>{instructions}</Text>
        <TouchableOpacity style={styles.speakerButton}>
          <Image
            source={require('../assets/images/speaker.png')}
            style={styles.speakerIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 2, // Top 2/3 of the screen
  },
  instructionsContainer: {
    flex: 1, // Bottom 1/3 of the screen
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  instructionsText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  speakerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  speakerIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff', // Optional: Makes the icon white
  },
});

export default NavigationAssistance;
