import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Login from '../screens/beforeLogin/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneLogin from '../screens/beforeLogin/PhoneLogin';
import OtpScreen from '../screens/beforeLogin/OtpScreen';
import SignUp from '../screens/beforeLogin/SignUp';

const BeforeLoginNavigator = (props: any) => {
  const BeforeLoginStack = createNativeStackNavigator();

  const screens = [
    {
      name: 'Login',
      component: Login,
    },
    {
      name: 'PhoneLogin',
      component: PhoneLogin,
    },
    {
      name: 'OtpScreen',
      component: OtpScreen,
    },
    {
      name: 'SignUp',
      component: SignUp,
    },
  ];

  return (
    <BeforeLoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {screens.map((item: {name: string; component: any}, index) => (
        <BeforeLoginStack.Screen
          name={item.name}
          component={item.component}
          key={index}
        />
      ))}
    </BeforeLoginStack.Navigator>
  );
};

export default BeforeLoginNavigator;