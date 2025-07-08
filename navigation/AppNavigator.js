// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/HomeScreen';
// import SortVisualizerScreen from '../screens/SortVisualizerScreen';
// import SettingsScreen from '../screens/SettingsScreen';

// const Stack = createStackNavigator();

// export default function AppNavigator() {
//   return (
//     <Stack.Navigator initialRouteName="Home">
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="SortVisualizer" component={SortVisualizerScreen} />
//       <Stack.Screen name="Settings" component={SettingsScreen} />
//     </Stack.Navigator>
//   );
// }

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import SortVisualizerScreen from '../screens/SortVisualizerScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'DSA Visualizer' }}
        />
        <Stack.Screen 
          name="SortVisualizer" 
          component={SortVisualizerScreen} 
          options={{ title: 'Sorting Visualizer' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: 'Settings' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;