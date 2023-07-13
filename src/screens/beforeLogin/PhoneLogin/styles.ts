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
    paddingVertical: wp(3),
    paddingHorizontal: hp(2),
    borderWidth: 1,
    marginVertical: hp(4),
    borderRadius: hp(2),
  },
});
