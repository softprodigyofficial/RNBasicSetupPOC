import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import styles from './styles';
import {logout} from '../redux/action/loginAction';

const CustomSidebarMenu = (props: any) => {
  const dispatch = useDispatch<any>();
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  const signOut = () => {
    dispatch(logout());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      {/*Top Large Image */}
      <Image
        source={{uri: BASE_PATH + proileImage}}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        {/* this is for adding new screen in sidemenu */}
        <DrawerItem
          label="About Us"
          onPress={() => Linking.openURL('https://react.dev/')}
        />
        <DrawerItem
          label="Logout"
          onPress={() => {
            signOut();
          }}
        />
        {/* this is for adding view */}
        <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
          <Image
            source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          />
        </View>
      </DrawerContentScrollView>
      <Text style={styles.drawerText}>React Native Template</Text>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;
