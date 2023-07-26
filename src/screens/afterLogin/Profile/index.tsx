import React, {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Slider from '../../../components/slider';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import styles from './styles'

const Profile = () => {
  return (
    <View
      style={styles.container}>
      <Slider />
    </View>
  );
};

export default Profile;
