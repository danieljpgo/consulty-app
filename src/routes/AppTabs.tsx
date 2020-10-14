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
        activeBackgroundColor: themeContext.colors.surface.active,
        inactiveTintColor: themeContext.colors.surface.placeholder,
        activeTintColor: themeContext.colors.title.main,
      }}
    >
      <Screen
        name="Teachers"
        component={Teachers}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? themeContext.colors.primary.main : color}
            />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? themeContext.colors.primary.main : color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppTabs;
