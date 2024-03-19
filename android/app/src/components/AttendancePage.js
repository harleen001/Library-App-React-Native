import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';

const AttendancePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Attendance</Text>
      <Calendar
        // Calendar configuration props
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default AttendancePage;
