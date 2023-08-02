import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { FontSize } from '../../../utils/dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: hp(2),
  },
  logContainer: {marginTop: hp(4), alignItems: 'center'},
  inputStyle: {
    width: wp(75),
    textAlignVertical: 'center',
    paddingVertical: wp(2),
    paddingHorizontal: wp(4),
    borderWidth: 1,
    marginVertical: hp(2),
    borderRadius: hp(2),
  },
  loginText: {
    textAlign: 'center',
    fontSize: FontSize.h4,
    marginVertical: hp(3),
  }, 
});
