import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import Favorites from '../pages/Favorites';
import Teachers from '../pages/Teachers';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabs: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: themeContext.unit * 4,
        },
        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          width: themeContext.unit,
          height: themeContext.unit,
        },
        labelStyle: {
          fontFamily: 'Archivo_700Bold',
          fontSize: themeContext.fontSize.small,
          marginLeft: themeContext.unit,
        },
        inactiveBackgroundColor: themeContext.colors.surface.constrast,
        activeBackgroundColor: '#ebebf5',
        inactiveTintColor: '#c1cbcc',
        activeTintColor: themeContext.colors.title.main,
      }}
    >
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-easel" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Teachers"
        component={Teachers}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppTabs;
