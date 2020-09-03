import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Favorites from '../pages/Favorites';
import Teachers from '../pages/Teachers';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabs: React.FC = () => {
  return (
    <Navigator>
      <Screen name="Favorites" component={Favorites} />
      <Screen name="Teachers" component={Teachers} />
    </Navigator>
  );
};

export default AppTabs;
