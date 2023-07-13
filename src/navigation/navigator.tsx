import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AfterLoginNavigator from './AfterLoginNavigator';
import BeforeLoginNavigator from './BeforeLoginNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      {/* {userToken === null ? */}
      {true ? <BeforeLoginNavigator /> : <AfterLoginNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;