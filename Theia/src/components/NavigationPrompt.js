import React from 'react';
import { View, Text } from 'react-native';

const NavigationPrompt = ({ message }) => {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
};

export default NavigationPrompt;