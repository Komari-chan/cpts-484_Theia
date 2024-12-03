import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

const EmergencyAlert = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleEmergencyPress = () => {
    setModalVisible(true); // Open confirmation modal
  };

  const confirmAlert = () => {
    setModalVisible(false);
    Alert.alert('Emergency Alert Sent', 'Your emergency alert has been triggered.', [
      { text: 'OK' },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Emergency Alert</Text>

      <Text style={styles.info}>
        In case of an emergency, press the button below to send an alert.
      </Text>

      <TouchableOpacity
        style={styles.emergencyButton}
        onPress={handleEmergencyPress}
      >
        <Text style={styles.emergencyText}>Send Emergency Alert</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Confirm Emergency Alert</Text>
            <Text style={styles.modalInfo}>
              Are you sure you want to send an emergency alert?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.confirmButton}
                onPress={confirmAlert}
              >
                <Text style={styles.confirmText}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#212529',
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#495057',
  },
  emergencyButton: {
    backgroundColor: '#dc3545',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  emergencyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#212529',
  },
  modalInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#495057',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  cancelText: {
    color: '#fff',
    fontSize: 16,
  },
  confirmButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default EmergencyAlert;
