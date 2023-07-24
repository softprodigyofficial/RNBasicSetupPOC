import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FontSize} from '../../../utils/dimension';

const SelectBotNav = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{
          flex: 0.2,
          justifyContent: 'center',
          width: 200,
          alignItems: 'center',
          backgroundColor: '',
        }}
        onPress={() => navigation.navigate('BottomTab1')}>
        <Text style={{color: 'blue', fontSize: FontSize.h3_1}}>
          Bottom Tab 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 0.2,
          justifyContent: 'center',
          width: 200,
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('BottomTab2')}>
        <Text style={{color: 'blue', fontSize: FontSize.h3_1}}>
          Bottom Tab 2
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectBotNav;
