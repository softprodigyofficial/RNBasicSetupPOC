import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontSize} from '../utils/dimension';

export default StyleSheet.create({
  drawerText: {fontSize: FontSize.h1_8, textAlign: 'center', color: 'grey'},
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: hp(16),
    height: hp(16),
    borderRadius: hp(8),
    alignSelf: 'center',
  },
  iconStyle: {
    width: hp(2),
    height: hp(2),
    marginHorizontal: wp(1),
  },
  customItem: {
    padding: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
});
