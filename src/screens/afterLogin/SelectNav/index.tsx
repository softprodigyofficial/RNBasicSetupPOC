import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../../../utils/dimension';
import styles from './styles';
import { Colors } from '../../../utils/colors';

const SelectBotNav = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.containerSelect}>
      <TouchableOpacity
        style={styles.navOpt}
        onPress={() => navigation.navigate('Onboard')}>
        <Text style={styles.navName}>
         Onboarding Tutorial
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
         style={styles.navOpt}
        onPress={() => navigation.navigate('BottomTab1')}>
        <Text style={styles.navName}>
          Bottom Tab 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
         style={styles.navOpt}
        onPress={() => navigation.navigate('BottomTab2')}>
        <Text style={styles.navName}>
          Bottom Tab 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectBotNav;
