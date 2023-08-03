import React from 'react';
import {Alert, Animated, StyleSheet, TouchableOpacity} from 'react-native';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/afterLogin/Home';
import Settings from '../screens/afterLogin/Settings';
import Profile from '../screens/afterLogin/Profile';
import {Colors} from '../utils/colors';
import {useNavigation} from '@react-navigation/native';
import {MyStack} from './AfterLoginNavigator';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function BottomTabs() {
  const navigation = useNavigation<any>();
  const _renderIcon = (routeName: any, selectedTab: any) => {
    let icon = '';
    switch (routeName) {
      case 'title1':
        icon = 'pulse';
        break;
      case 'title2':
        icon = 'settings-outline';
        break;
      case 'title3':
        icon = 'radio';
        break;
      case 'title4':
        icon = 'easel';
        break;
    }
    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'red' : 'gray'}
      />
    );
  };

  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  const renderCircle = ({routeName, selectedTab, navigate}: any) => {
    return (
      <Animated.View style={styles.btnCircleUp}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate('SelectNav')
          }}>
          <Ionicons name={'home'} color="gray" size={25} />
        </TouchableOpacity>
      </Animated.View>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      shadowStyle={styles.shawdow}
      height={55}
      circleWidth={60}
      bgColor={Colors.white}
      initialRouteName="Home"
      borderTopLeftRight
      renderCircle={renderCircle}
      screenOptions={{headerShown: false}}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="title1"
        position="LEFT"
        component={MyStack}
      />
      <CurvedBottomBar.Screen
        name="title2"
        position="LEFT"
        component={Settings}
      />
      <CurvedBottomBar.Screen name="title3" component={Home} position="RIGHT" />
      <CurvedBottomBar.Screen
        name="title4"
        component={Profile}
        position="RIGHT"
      />
    </CurvedBottomBar.Navigator>
  );
}

export const styles = StyleSheet.create({
  shawdow: {
    shadowColor: Colors.grey40,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  btnCircleUp: {
    width: hp(8),
    height: hp(8),
    borderRadius: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    bottom: hp(4),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
