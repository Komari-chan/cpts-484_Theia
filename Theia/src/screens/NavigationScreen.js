import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { calculateRoute, simulateMovement } from '../services/MapService';

const NavigationScreen = () => {
  const [status, setStatus] = useState('Planning route...');
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const route = calculateRoute({ x: 0, y: 0 }, 'room401');
    simulateMovement(
      route,
      (turn) => setStatus(`Turn ${turn}`),
      () => setStatus('Arrived at destination.')
    );
  }, []);

  return (
    <View>
      <Text>Current Status: {status}</Text>
      <Text>Position: {JSON.stringify(position)}</Text>
    </View>
  );
};

export default NavigationScreen;
