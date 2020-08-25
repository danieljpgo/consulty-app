import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { ThemeProvider } from 'styled-components';
import light from './src/styles/themes/light';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={light}>
        <Landing />
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}

export default App;