import React from 'react';
import {View} from 'react-native';
import Slider from '../../../components/slider';
import styles from './styles';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Slider />
    </View>
  );
};

export default Profile;
