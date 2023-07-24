import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AfterLoginNavigator from './AfterLoginNavigator';
import BeforeLoginNavigator from './BeforeLoginNavigator';
import {useDispatch, useSelector} from 'react-redux';
import navigationService from './navigationService';
import * as storage from '../service/asyncStoreConfig';
import { setToken } from '../redux/action/loginAction';

const Navigator = () => {
  const dispatch = useDispatch<any>();
  const { userToken } = useSelector(
    (state: any) => state.loginReducer,
  );

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const userToken = await storage.getItem('userToken');
      dispatch(setToken(userToken));
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <NavigationContainer
      ref={navigatorRef => {
        navigationService.setTopLevelNavigator(navigatorRef);
      }}>
      {userToken ? <AfterLoginNavigator /> : <BeforeLoginNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;