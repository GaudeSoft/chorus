import { View, Text } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Chant from '../Chants';
import { COLORS } from '../../outils/constantes';

const BottomTabs = () => {
    const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
    initialRouteName="tabs_home"
    screenOptions={{
      tabBarActiveTintColor: COLORS.secondary,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="tabs_home"
      component={Home}
      options={{
        tabBarLabel: 'Acceuil',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Chants"
      component={Chant}
      options={{
        tabBarLabel: 'Chants',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chat" color={color} size={24} />
        ),
      }}
    />
    {/* <Tab.Screen
      name="Parametres"
      component={Parametres}
      options={{
        tabBarLabel: 'Paramètres',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-settings-outline" color={color} size={24} />
        ),
      }}
    /> */}
  </Tab.Navigator>
  )
}

export default BottomTabs