import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Settings = ({ onSave }) => {
  const [contact, setContact] = useState('123');
  const [volume, setVolume] = useState(50);

  return (
    <View>
      <Text>Emergency Contact:</Text>
      <TextInput value={contact} onChangeText={setContact} />
      <Text>Volume:</Text>
      <TextInput value={String(volume)} onChangeText={(v) => setVolume(parseInt(v))} />
      <Button title="Save" onPress={() => onSave({ contact, volume })} />
    </View>
  );
};

export default Settings;