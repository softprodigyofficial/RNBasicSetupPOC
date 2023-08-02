import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  otpCon: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(5),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  timerBox: {
    height: hp(4),
    width: wp(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(4),
    top: hp(30),
  },
  otpTimer: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
  resend: {textAlign: 'center', color: Colors.primaryBlue},
});
