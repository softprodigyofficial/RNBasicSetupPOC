import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import style from './styles';
import {useNavigation} from '@react-navigation/native';

const PhoneLogin = () => {
  const [phone, onChangePhone] = useState('');
  const navigation = useNavigation<any>();

  return (
    <View style={style.container}>
      <Text style={{textAlign: 'center'}}>Login - Phone</Text>
      <TextInput
        style={style.inputStyle}
        placeholder="Phone Number"
        onChangeText={text => onChangePhone(text)}
        value={phone}
        keyboardType="number-pad"
      />
      <Button title="Submit" onPress={() => navigation.navigate('OtpScreen')} />
    </View>
  );
};

export default PhoneLogin;
