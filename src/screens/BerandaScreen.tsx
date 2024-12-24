import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import InputText from '../components/InputText';

const BerandaScreen = () => {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');

  const handleShowOutput = () => {
    setOutputValue(inputValue);
  };

  return (
    <View style={styles.container}>
      <InputText
        placeholder="Masukkan teks..."
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Tampilkan Output" onPress={handleShowOutput} />
      {outputValue !== '' && (
        <Text style={styles.output}>Output: {outputValue}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  output: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6200ea',
  },
});

export default BerandaScreen;