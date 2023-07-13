import {Text, TextInput, View, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import AppButton from '../../../components/appButton';

const Login = () => {
  const [text, onChangeText] = useState('');
  const [pass, onChangePass] = useState('');
  const navigation = useNavigation<any>();

  const submitForm = () => {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.logContainer}>
        <Text style={styles.loginText}>Log In</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          onChangeText={text => onChangeText(text)}
          value={text}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          onChangeText={text => onChangePass(text)}
          value={pass}
          keyboardType="email-address"
        />
        <TouchableOpacity
          style={styles.forgetPass}
          onPress={() => navigation.navigate('PhoneLogin')}>
          <Text style={styles.forgetTxt}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.submitBtn}>
          <AppButton text={'Submit'} onPress={() => {}} />
        </View>
      </View>
      <View style={{backgroundColor: 'red'}}>
        <TouchableOpacity
          style={styles.clickOpt}
          onPress={() => navigation.navigate('PhoneLogin')}>
          <Text>Login from mobile number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.clickOpt}
          onPress={() => navigation.navigate('SignUp')}>
          <Text>New Here!, SignUp</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
