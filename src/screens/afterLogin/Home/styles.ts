import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.redOpacityLow,
  },
  optNav: {
    height: hp(9),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
