// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { useTheme } from '../contexts/ThemeContext';

// const SortingVisualizer = ({ array, comparedIndices = [], description }) => {
//   const { colors } = useTheme();
//   const maxValue = Math.max(...array, 10);
//   const windowWidth = Dimensions.get('window').width;
//   const barWidth = (windowWidth - 40) / array.length - 5;

//   return (
//     <View style={[styles.container, { backgroundColor: colors.card }]}>
//       <Text style={[styles.description, { color: colors.text }]}>{description}</Text>
      
//       <View style={styles.visualization}>
//         {array.map((value, index) => {
//           const isCompared = comparedIndices.includes(index);
//           const barHeight = (value / maxValue) * 150;
          
//           return (
//             <View
//               key={index}
//               style={[
//                 styles.bar,
//                 {
//                   height: barHeight,
//                   width: barWidth,
//                   backgroundColor: isCompared ? colors.secondary : colors.primary,
//                   marginRight: 5,
//                 },
//               ]}
//             >
//               <Text style={styles.barText}>{value}</Text>
//             </View>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   visualization: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     height: 180,
//     justifyContent: 'center',
//   },
//   bar: {
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     borderTopLeftRadius: 5,
//     borderTopRightRadius: 5,
//   },
//   barText: {
//     color: 'white',
//     fontSize: 10,
//     marginBottom: 5,
//   },
// });

// export default SortingVisualizer;


import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const SortingVisualizer = ({ array, comparedIndices = [], description }) => {
  const { colors } = useTheme();
  const maxValue = Math.max(...array, 10);
  const windowWidth = Dimensions.get('window').width;
  const barWidth = (windowWidth - 40) / array.length - 5;

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]}>
      <Text style={[styles.description, { color: colors.text }]}>{description}</Text>
      
      <View style={styles.visualization}>
        {array.map((value, index) => {
          const isCompared = comparedIndices.includes(index);
          const barHeight = (value / maxValue) * 150;

          return (
            <View key={index} style={styles.barWrapper}>
              <Text style={[styles.barText, { color: colors.text }]}>{value}</Text>
              <View
                style={[
                  styles.bar,
                  {
                    height: barHeight,
                    width: barWidth,
                    backgroundColor: isCompared ? colors.secondary : colors.primary,
                  },
                ]}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  visualization: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 180,
    justifyContent: 'center',
  },
  barWrapper: {
    alignItems: 'center',
    marginRight: 5,
  },
  bar: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  barText: {
    fontSize: 10,
    marginBottom: 3,
  },
});

export default SortingVisualizer;
