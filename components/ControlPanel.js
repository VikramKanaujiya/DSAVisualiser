

import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTheme } from '../contexts/ThemeContext';

const ControlPanel = ({
  isSorting,
  onStart,
  onNext,
  onPrev,
  onReset,
  algorithm,
  setAlgorithm,
  canInteract,
}) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { borderColor: colors.border }]}>
      <View style={styles.algorithmSelector}>
        <Picker
          selectedValue={algorithm}
          onValueChange={(itemValue) => setAlgorithm(itemValue)}
          style={[styles.picker, { color: colors.text }]}
          enabled={canInteract}
          dropdownIconColor={colors.text}
        >
          <Picker.Item label="Insertion Sort" value="insertion" />
          <Picker.Item label="Bubble Sort" value="bubble" />
        </Picker>
      </View>
      
      <View style={styles.buttonGroup}>
        {!isSorting ? (
          <Button
            title="Start Sorting"
            onPress={onStart}
            color={colors.primary}
            disabled={!canInteract}
          />
        ) : (
          <>
            <Button
              title="Previous Step"
              onPress={onPrev}
              color={colors.primary}
            />
            <Button
              title="Next Step"
              onPress={onNext}
              color={colors.primary}
            />
          </>
        )}
        
        <Button
          title="Reset"
          onPress={onReset}
          color="red"
          disabled={!canInteract && !isSorting}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
  },
  algorithmSelector: {
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ControlPanel;