import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/afterLogin/Home';

const AfterLoginNavigator = (props: any) => {
  const AfterLoginStack = createNativeStackNavigator();

  const screens = [
    {
      name: 'Home',
      component: Home,
    },
  ];

  return (
    <AfterLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map((item: {name: string; component: any}, index) => (
        <AfterLoginStack.Screen
          name={item.name}
          component={item.component}
          key={index}
        />
      ))}
    </AfterLoginStack.Navigator>
  );
};

export default AfterLoginNavigator;