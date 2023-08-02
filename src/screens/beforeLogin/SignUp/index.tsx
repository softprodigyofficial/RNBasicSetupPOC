import {Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import AppButton from '../../../components/appButton';
import AppInput from '../../../components/textInput';
import {showToast} from '../../../utils/function';
import {validateEmail, validatePhone} from '../../../utils/helper';
import {validatePassword} from '../../../utils/helper';
import {Colors} from '../../../utils/colors';
import navigationService from '../../../navigation/navigationService';
import {ScrollView} from 'react-native-gesture-handler';

const SignUp = () => {
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const [fnameError, setFNameError] = useState<any>('');
  const [lnameError, setLNameError] = useState<any>('');
  const [emailError, setEmailError] = useState<any>('');
  const [phoneError, setPhoneError] = useState<any>('');
  const [passError, setPassError] = useState<any>('');
  const [passConfError, setPassConfError] = useState<any>('');

  const handlefNameChange = (text: string) => {
    setFName(text);
  };
  const handlelNameChange = (text: string) => {
    setLName(text);
  };
  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handleMobileChange = (text: string) => {
    setPhone(text);
  };
  const handlePassChange = (text: string) => {
    setPass(text);
  };
  const handleConfirmPassChange = (text: string) => {
    setConfirmPass(text);
  };

  const handleFNameBlur = () => {
    if (fname === '') {
      setFNameError('First Name is required');
    } else {
      setFNameError(false);
    }
  };
  const handleLNameBlur = () => {
    if (lname === '') {
      setLNameError('Last Name is required');
    } else {
      setLNameError(false);
    }
  };

  const handleEmailBlur = () => {
    if (email === '') {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Invalid Email');
    } else {
      setEmailError(false);
    }
  };

  const handlePhoneBlur = () => {
    if (phone === '') {
      setPhoneError('Phone number is required');
    } else if (!validatePhone(email)) {
      setPhoneError('Invalid number');
    } else {
      setPhoneError(false);
    }
  };

  const handlePassBlur = () => {
    if (pass === '') {
      setPassError('Password is required');
    } else if (!validatePassword(pass)) {
      setPassError('Invalid Password');
    } else {
      setPassError(false);
    }
  };

  const handlePassConfirm = () => {
    if (confirmPass === '') {
      setPassConfError('Password is required');
    } else if (!validatePassword(pass)) {
      setPassConfError('Invalid Password');
    } else {
      setPassConfError(false);
    }
  };

  const handleSubmit = () => {
    if (
      fname === '' ||
      lname === '' ||
      email === '' ||
      phone === '' ||
      pass === '' ||
      confirmPass === ''
    ) {
      showToast('Enter All Feilds');
    } else if (!validateEmail(email)) {
      setEmailError(true);
    } else if (!validatePhone(phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
      setEmailError(false);
      navigationService.navigate('OtpScreen');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logContainer}>
        <Text style={styles.loginText}>Sign Up</Text>
        <View>
          <AppInput
            placeholder={'Enter your First Name'}
            error={fnameError}
            onBlur={handleFNameBlur}
            onChangeText={handlefNameChange}
            value={fname}
            keyboardType="default"
            secureTextEntry={undefined}
            maxLength={30}
          />
          <AppInput
            placeholder={'Enter your Last Name'}
            error={lnameError}
            onBlur={handleLNameBlur}
            onChangeText={handlelNameChange}
            value={lname}
            keyboardType="default"
            secureTextEntry={undefined}
            maxLength={30}
          />
          <AppInput
            placeholder={'Enter your Email'}
            error={emailError}
            onBlur={handleEmailBlur}
            onChangeText={handleEmailChange}
            value={email}
            keyboardType="email-address"
            secureTextEntry={undefined}
            maxLength={30}
          />
          <AppInput
            placeholder={'Enter your Mobile number'}
            error={phoneError}
            onBlur={handlePhoneBlur}
            onChangeText={handleMobileChange}
            value={phone}
            keyboardType="phone-pad"
            secureTextEntry={undefined}
            maxLength={10}
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
          <AppInput
            placeholder={'Confirm Password'}
            error={passConfError}
            onBlur={handlePassConfirm}
            onChangeText={handleConfirmPassChange}
            value={confirmPass}
            keyboardType="default"
            secureTextEntry={true}
            maxLength={30}
          />
          <View>
            <AppButton text={'Submit'} onPress={() => handleSubmit()} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.loginOpt}
        onPress={() => navigationService.navigate('Login')}>
        <Text>
          Already have account,{' '}
          <Text style={{color: Colors.primary}}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUp;
