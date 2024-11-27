import React from 'react';
import { View, Text, Button } from 'react-native';

const FallAlertScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Emergency! Calling 123...</Text>
      <Button title="Cancel" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default FallAlertScreen;
