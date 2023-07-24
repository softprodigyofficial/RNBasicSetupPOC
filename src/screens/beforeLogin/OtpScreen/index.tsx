import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import style from './styles';
import OtpInput from '../../../components/otpFeild';
import AppButton from '../../../components/appButton';
import {Colors} from '../../../utils/colors';
import navigationService from '../../../navigation/navigationService';

const OtpScreen = () => {
  const [otp, setOtp] = useState<String>();
  const [timer, setTimer] = useState<string>('30');
  const [resendOTP, setResendOTP] = useState<any>(true);
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds - 1);
    }, 1000);

    // Clean up the timer when the component unmounts or when seconds reach 0
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      // Timer has reached 0 seconds, perform any necessary actions here
      setResendOTP(false);
      clearInterval(timer);
    }
  }, [seconds, resendOTP]);

  return (
    <View style={style.container}>
      <Text>Enter OTP</Text>
      <View style={style.otpCon}>
        <OtpInput inputsCount={4} onComplete={text => setOtp(text)} />
      </View>
      <View>
        <AppButton
          text="Submit" 
          onPress={() => navigationService.navigate('Login')}
        />
      </View>
      <View
        style={[
          {backgroundColor: resendOTP ? Colors.blackTransparent : Colors.white},
          style.timerBox,
        ]}>
        {resendOTP ? (
          <Text
            style={style.otpTimer}>
            00 : {seconds}
          </Text>
        ) : (
          <Text style={style.resend}>
            Resend OTP
          </Text>
        )}
      </View>
    </View>
  );
};

export default OtpScreen;
