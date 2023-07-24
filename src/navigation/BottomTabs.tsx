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
      style={styles.bottomBar}
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
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
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
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    bottom: 28,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
