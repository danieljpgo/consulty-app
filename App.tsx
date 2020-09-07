/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';
import {
  Archivo_400Regular,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { SafeAreaView } from 'react-native-safe-area-context';

import light from './src/styles/themes/light';
import AppStack from './src/routes/AppStack';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.primary.main};
`;

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
        {/* <SafeArea> */}
        <AppStack />
        <StatusBar style="light" />
        {/* </SafeArea> */}
      </ThemeProvider>
    );
  }
};

export default App;
