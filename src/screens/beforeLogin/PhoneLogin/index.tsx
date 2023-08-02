import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import style from './styles';
import AppInput from '../../../components/textInput';
import styles from './styles';
import AppButton from '../../../components/appButton';
import {validatePhone} from '../../../utils/helper';
import navigationService from '../../../navigation/navigationService';
import { useNavigation } from '@react-navigation/native';

const PhoneLogin = () => {
  const [phone, onChangePhone] = useState('');
  const [phoneErr, setPhoneErr] = useState<any>('');

  const handleSubmit = () => {
    if (phone === '') {
      setPhoneErr('Mobile number is required');
    } else if (!validatePhone(phone)) {
      setPhoneErr('Enter valid mobile number');
    } else {
      setPhoneErr(false);
      navigationService.navigate('OtpScreen');
    }
  };

  return (
    <View style={style.container}>
      <View style={styles.logContainer}>
        <Text style={styles.loginText}>Mobile Login</Text>
        <AppInput
          maxLength={10} // country code is not included
          placeholder="Phone Number"
          onChangeText={text => onChangePhone(text)}
          value={phone}
          keyboardType="phone-pad"
          secureTextEntry={undefined}
          error={phoneErr}
          onBlur={() => {}}
        />
        <AppButton onPress={handleSubmit} text={'Submit'} />
      </View>
    </View>
  );
};

export default PhoneLogin;
