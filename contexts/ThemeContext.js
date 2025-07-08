// import React, { createContext, useState } from 'react';

// export const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDark, setIsDark] = useState(false);

//   const toggleTheme = () => setIsDark(!isDark);

//   const theme = {
//     isDark,
//     toggleTheme,
//     colors: isDark
//       ? {
//           background: '#121212',
//           text: '#ffffff',
//           primary: '#BB86FC',
//           secondary: '#03DAC6',
//           card: '#1E1E1E',
//           border: '#333333',
//         }
//       : {
//           background: '#ffffff',
//           text: '#000000',
//           primary: '#6200ee',
//           secondary: '#03dac6',
//           card: '#f5f5f5',
//           border: '#dddddd',
//         },
//   };

//   return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
// };

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark
      ? {
          background: '#121212',
          text: '#ffffff',
          primary: '#BB86FC',
          secondary: '#03DAC6',
          card: '#1E1E1E',
          border: '#333333',
        }
      : {
          background: '#ffffff',
          text: '#000000',
          primary: '#6200ee',
          secondary: '#03dac6',
          card: '#f5f5f5',
          border: '#dddddd',
        },
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

// Add this custom hook export
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};