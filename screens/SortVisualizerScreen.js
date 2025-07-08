import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';
import ArrayInput from '../components/ArrayInput';
import ControlPanel from '../components/ControlPanel';
import SortingVisualizer from '../components/SortingVisualizer';
import AlgorithmInfo from '../components/AlgorithmInfo';

const SortVisualizerScreen = () => {
  const { colors } = useTheme();
  const [array, setArray] = useState([64, 34, 25, 12, 22, 11, 90]);
  const [algorithm, setAlgorithm] = useState('insertion');
  const [isSorting, setIsSorting] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);

  const generateSteps = (arr, algo) => {
    const steps = [];
    const arrCopy = [...arr];
    
    if (algo === 'insertion') {
      // Insertion sort steps generation
      for (let i = 1; i < arrCopy.length; i++) {
        let key = arrCopy[i];
        let j = i - 1;
        
        steps.push({
          array: [...arrCopy],
          compared: [i, j],
          description: `Comparing ${arrCopy[j]} and ${key}`,
        });
        
        while (j >= 0 && arrCopy[j] > key) {
          arrCopy[j + 1] = arrCopy[j];
          steps.push({
            array: [...arrCopy],
            compared: [j, j + 1],
            description: `Moving ${arrCopy[j]} to position ${j + 1}`,
          });
          j = j - 1;
        }
        arrCopy[j + 1] = key;
        steps.push({
          array: [...arrCopy],
          compared: [j + 1],
          description: `Inserting ${key} at position ${j + 1}`,
        });
      }
    } else if (algo === 'bubble') {
      // Bubble sort steps generation
      for (let i = 0; i < arrCopy.length - 1; i++) {
        for (let j = 0; j < arrCopy.length - i - 1; j++) {
          steps.push({
            array: [...arrCopy],
            compared: [j, j + 1],
            description: `Comparing ${arrCopy[j]} and ${arrCopy[j + 1]}`,
          });
          
          if (arrCopy[j] > arrCopy[j + 1]) {
            [arrCopy[j], arrCopy[j + 1]] = [arrCopy[j + 1], arrCopy[j]];
            steps.push({
              array: [...arrCopy],
              compared: [j, j + 1],
              description: `Swapping ${arrCopy[j + 1]} and ${arrCopy[j]}`,
            });
          }
        }
      }
    }
    
    steps.push({
      array: [...arrCopy],
      description: 'Sorting completed!',
    });
    
    return steps;
  };

  const handleStartSorting = () => {
    const generatedSteps = generateSteps(array, algorithm);
    setSteps(generatedSteps);
    setCurrentStep(0);
    setIsSorting(true);
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsSorting(false);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setIsSorting(false);
    setCurrentStep(0);
    setSteps([]);
  };

  const handleArrayChange = (newArray) => {
    if (!isSorting) {
      setArray(newArray);
      setSteps([]);
      setCurrentStep(0);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AlgorithmInfo algorithm={algorithm} />
      
      <ArrayInput 
        array={steps[currentStep]?.array || array} 
        onChange={handleArrayChange} 
        disabled={isSorting}
      />
      
      <SortingVisualizer 
        array={steps[currentStep]?.array || array} 
        comparedIndices={steps[currentStep]?.compared || []}
        description={steps[currentStep]?.description || 'Ready to sort'}
      />
      
      <ControlPanel
        isSorting={isSorting}
        onStart={handleStartSorting}
        onNext={handleNextStep}
        onPrev={handlePrevStep}
        onReset={handleReset}
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        canInteract={!isSorting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SortVisualizerScreen;