import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../utils/colors';

export default StyleSheet.create({
  rightArrow: {
    height: hp(10),
    width: wp(20),
    backgroundColor: Colors.grey40,
    borderRadius: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
    top: hp(9),
    left: wp(18),
  },
  container: {height: hp(25), width: wp(60)},
});
