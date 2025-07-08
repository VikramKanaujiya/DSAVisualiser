import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const ArrayInput = ({ array, onChange, disabled }) => {
  const { colors } = useTheme();
  const [inputValue, setInputValue] = useState('');

  const handleAddNumber = () => {
    const num = parseInt(inputValue);
    if (isNaN(num)) {
      Alert.alert('Invalid input', 'Please enter a valid number');
      return;
    }
    
    if (array.includes(num)) {
      Alert.alert('Duplicate number', 'This number already exists in the array');
      return;
    }
    
    const newArray = [...array, num];
    onChange(newArray);
    setInputValue('');
  };

  const handleRemoveNumber = (index) => {
    const newArray = array.filter((_, i) => i !== index);
    onChange(newArray);
  };

  const handleEditNumber = (index, newValue) => {
    const num = parseInt(newValue);
    if (isNaN(num)) {
      Alert.alert('Invalid input', 'Please enter a valid number');
      return;
    }
    
    if (array.includes(num) && array.indexOf(num) !== index) {
      Alert.alert('Duplicate number', 'This number already exists in the array');
      return;
    }
    
    const newArray = [...array];
    newArray[index] = num;
    onChange(newArray);
  };

  return (
    <View style={[styles.container, { borderColor: colors.border }]}>
      <Text style={[styles.title, { color: colors.text }]}>Array Elements</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: colors.text, borderColor: colors.border }]}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Enter a number"
          placeholderTextColor={colors.text + '80'}
          keyboardType="numeric"
          editable={!disabled}
        />
        <Button 
          title="Add" 
          onPress={handleAddNumber} 
          disabled={disabled}
          color={colors.primary}
        />
      </View>
      
      <View style={styles.arrayContainer}>
        {array.map((num, index) => (
          <View key={index} style={styles.arrayItem}>
            <TextInput
              style={[styles.arrayInput, { color: colors.text, borderColor: colors.border }]}
              value={num.toString()}
              onChangeText={(text) => handleEditNumber(index, text)}
              keyboardType="numeric"
              editable={!disabled}
            />
            <Button
              title="×"
              onPress={() => handleRemoveNumber(index)}
              color="red"
              disabled={disabled}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  arrayContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  arrayItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
  },
  arrayInput: {
    width: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
    marginRight: 5,
  },
});

export default ArrayInput;