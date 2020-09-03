import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Classes from '../pages/Classes';

import AppTabs from './AppTabs';

const { Navigator, Screen } = createStackNavigator();

const AppStack: React.FC = () => (
  <NavigationContainer>
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Landing" component={Landing} />
      <Screen name="Classes" component={Classes} />
      <Screen name="Tabs" component={AppTabs} />
    </Navigator>
  </NavigationContainer>
);

export default AppStack;
