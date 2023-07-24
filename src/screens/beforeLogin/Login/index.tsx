import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AppButton from '../../../components/appButton';
import AppInput from '../../../components/textInput';
import {validateEmail} from '../../../utils/helper';
import {showToast} from '../../../utils/function';
import navigationService from '../../../navigation/navigationService';
import {useDispatch} from 'react-redux';
import {login} from '../../../redux/action/loginAction';

const Login = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [nameError, setNameError] = useState<any>('');
  const [passError, setPassError] = useState<any>('');

  const dispatch = useDispatch<any>();

  const handleNameChange = (text: string) => {
    setName(text);
  };
  const handlePassChange = (text: string) => {
    setPass(text);
  };

  const handleNameBlur = () => {
    if (name === '') {
      setNameError('Email is required');
    } else if (!validateEmail(name)) {
      setNameError('Invalid Email');
    } else {
      setNameError(false);
    }
  };
  const handlePassBlur = () => {
    if (pass === '') {
      setPassError('Password is required');
    } else {
      setPassError(false);
    }
  };
  const handleSubmit = () => {
    if (name === '' || pass === '') {
      showToast('Please fill all feilds!');
      setPassError('Pass is required')
      setNameError('Email is required')
    } else if (nameError !== false || passError !== false) {
      handleNameBlur();
      handlePassBlur();
      showToast('Resolve Error Message First!');
    } else {
      dispatch(login('token1'));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logContainer}>
        <Text style={styles.loginText}>Log In</Text>
        <View>
          <AppInput
            placeholder={'Enter your Email'}
            error={nameError}
            onBlur={handleNameBlur}
            onChangeText={handleNameChange}
            value={name}
            keyboardType="email-address"
            secureTextEntry={undefined}
            maxLength={30}
          />
          <AppInput
            placeholder={'Enter your Password'}
            error={passError}
            onBlur={handlePassBlur}
            onChangeText={handlePassChange}
            value={pass}
            keyboardType="default"
            secureTextEntry={true}
            maxLength={30}
          />
        </View>
        <TouchableOpacity
          style={styles.forgetPass}
          onPress={() => navigationService.navigate('PhoneLogin')}>
          <Text style={styles.forgetTxt}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.submitBtn}>
          <AppButton
            text={'Submit'}
            onPress={() => {
              handleSubmit();
            }}
          />
          <AppButton
            text={'Login from Mobile'}
            onPress={() => {
              navigationService.navigate('PhoneLogin');
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.clickOpt}
        onPress={() => navigationService.navigate('SignUp')}>
        <Text>
          New Here, <Text style={styles.signUpTxt}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
