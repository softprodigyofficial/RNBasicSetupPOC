import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.redOpacityLow,
  },
  drawerOpen: {
    height: hp(7),
    width: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
