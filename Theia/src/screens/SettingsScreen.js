import React from 'react';
import Settings from '../components/Settings';

const SettingsScreen = () => {
  return <Settings onSave={(data) => console.log('Saved settings:', data)} />;
};

export default SettingsScreen;
