import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const AlgorithmInfo = ({ algorithm }) => {
  const { colors } = useTheme();
  
  const getAlgorithmInfo = () => {
    switch (algorithm) {
      case 'insertion':
        return {
          name: 'Insertion Sort',
          description: 'Builds the final sorted array one item at a time by comparisons.',
          complexity: 'Time: O(n²) | Space: O(1)',
        };
      case 'bubble':
        return {
          name: 'Bubble Sort',
          description: 'Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.',
          complexity: 'Time: O(n²) | Space: O(1)',
        };
      default:
        return {
          name: '',
          description: '',
          complexity: '',
        };
    }
  };

  const info = getAlgorithmInfo();

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.title, { color: colors.text }]}>{info.name}</Text>
      <Text style={[styles.text, { color: colors.text }]}>{info.description}</Text>
      <Text style={[styles.complexity, { color: colors.text }]}>{info.complexity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 5,
  },
  complexity: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default AlgorithmInfo;