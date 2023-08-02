import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from '../../utils/colors';
import {FontSize} from '../../utils/dimension';

export default StyleSheet.create({
  input: {
    textAlign: 'center',
    width: wp(14),
    height: hp(8),
    borderRadius: hp(1),
    marginRight: wp(4),
    fontSize: FontSize.h2_8,
    fontWeight: 'bold',
    color: Colors.black,
    borderWidth: 0.5,
    borderColor: false ? Colors.red : Colors.white,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  lastItem: {
    marginRight: 0,
  },
  error: {
    borderColor: Colors.errorRed,
    color: Colors.black,
  },
});
