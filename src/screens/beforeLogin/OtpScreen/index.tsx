import {SafeAreaView, View, Button, Text} from 'react-native';
import React, {useState} from 'react';
import style from './styles';
import OtpInput from '../../../components/otpFeild';
import {useNavigation} from '@react-navigation/native';

const OtpScreen = () => {
  const [otp, setOtp] = useState<String>();
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView>
      <View style={style.otpCon}>
        <OtpInput inputsCount={4} onComplete={text => setOtp(text)} />
      </View>
      <View>
        {false ? <Text>Resend OTP</Text> : <Text> 20</Text>}
        <Button title="Submit" onPress={() => navigation.navigate('Login')} />
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;
