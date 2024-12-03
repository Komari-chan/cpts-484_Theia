import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';

const ApplicationSettings = () => {
  const [handsFree, setHandsFree] = useState(false);
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [autoNavigationSpeech, setAutoNavigationSpeech] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Application Settings</Text>

      <View style={styles.setting}>
        <Text style={styles.label}>Hands-Free Mode</Text>
        <Switch
          value={handsFree}
          onValueChange={(value) => setHandsFree(value)}
          thumbColor={handsFree ? '#0d6efd' : '#ccc'}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.label}>Text-to-Speech Mode</Text>
        <Switch
          value={textToSpeech}
          onValueChange={(value) => setTextToSpeech(value)}
          thumbColor={textToSpeech ? '#0d6efd' : '#ccc'}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.label}>Automatic Navigation Speech</Text>
        <Switch
          value={autoNavigationSpeech}
          onValueChange={(value) => setAutoNavigationSpeech(value)}
          thumbColor={autoNavigationSpeech ? '#0d6efd' : '#ccc'}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.label}>High Contrast Mode</Text>
        <Switch
          value={false}
          onValueChange={(value) => alert('High Contrast Mode toggled')}
          thumbColor={'#ccc'}
        />
      </View>

      <View style={styles.setting}>
        <Text style={styles.label}>Large Text Mode</Text>
        <Switch
          value={false}
          onValueChange={(value) => alert('Large Text Mode toggled')}
          thumbColor={'#ccc'}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#212529',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 18,
    color: '#212529',
  },
});

export default ApplicationSettings;
