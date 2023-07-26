import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomDrawerContent from './CustomSideMenu';
import Home from '../screens/afterLogin/Home';
import Settings from '../screens/afterLogin/Settings';
import BottomTabs from './BottomTabs';
import Profile from '../screens/afterLogin/Profile';
import SelectBotNav from '../screens/afterLogin/SelectNav';
import Icon from 'react-native-vector-icons/Entypo';
import Slider from '../components/slider';

const MyDrawer = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="SelectNav"
      screenOptions={{headerShown: true}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="SelectNav" component={SelectBotNav} />
      <Drawer.Screen name="BottomTab1" component={BottomTabs} />
      <Drawer.Screen name="BottomTab2" component={BottomTab1} />
    </Drawer.Navigator>
  );
};

export const MyStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Setting" component={Settings} />
      <Stack.Screen name="Onboard" component={Slider} />
    </Stack.Navigator>
  );
};

export const BottomTab1 = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Tab1-Home"
        component={Home}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color, size}) => (
            <Icon name="bell" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Tab1-Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Other Screen',
          tabBarIcon: ({color, size}) => (
            <Icon name="renren" color={color} size={size} />
          ),
          // tabBarBadge: 3,
        }}
      />
    </Tab.Navigator>
  );
};

{
  /* navigation nesting --> Drawer > Bottom Tab > Stack */
}
const AfterLoginNavigator = (props: any) => {
  return <MyDrawer />;
};

export default AfterLoginNavigator;