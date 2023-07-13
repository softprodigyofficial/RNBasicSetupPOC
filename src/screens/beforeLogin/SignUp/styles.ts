import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: hp(2),
  },
  inputStyle: {
    textAlignVertical: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    borderWidth: 1,
    marginVertical: hp(2),
    borderRadius: hp(2),
  },
  loginOpt: {
    alignItems: 'center',
    marginTop: hp(10),
  },
});
