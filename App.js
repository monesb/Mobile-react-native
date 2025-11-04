import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Myapp2 from './projecte/StartProjecte/Myapp2';
import Myappprops from './Support/Props/Myappprops';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>toto</Text>
      <StatusBar style="dark_content" backgroundColor='red' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
