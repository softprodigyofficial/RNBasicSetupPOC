import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../../../utils/dimension';
import styles from './styles';

const SelectBotNav = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabSelect}
        onPress={() => navigation.navigate('BottomTab1')}>
        <Text style={styles.tabButton}>
          Bottom Tab 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabSelect}
        onPress={() => navigation.navigate('BottomTab2')}>
        <Text style={styles.tabButton}>
          Bottom Tab 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectBotNav;
