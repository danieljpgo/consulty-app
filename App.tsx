/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { ThemeProvider } from 'styled-components';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

import light from './src/styles/themes/light';
import Landing from './src/pages/Landing';

const App: React.FC = () => {
  const [fontLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={light}>
        <Landing />
        <StatusBar style="light" />
      </ThemeProvider>
    );
  }
};

export default App;
