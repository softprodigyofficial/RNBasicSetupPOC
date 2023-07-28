import {StyleSheet} from 'react-native';
import {Colors} from '../utils/colors';
import {FontSize} from '../utils/dimension';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  drawerText: {fontSize: FontSize.h2_1, textAlign: 'center', color: Colors.gray},
  sideMenuProfileIcon: {
    resizeMode: 'center',
    alignSelf: 'center',
    width: wp(40),
    height: hp(20),
  },
  iconStyle: {
    width: hp(2),
    height: hp(2),
    marginHorizontal: wp(2),
  },
  customItem: {
    padding: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
  },
  shawdow: {
    shadowColor: Colors.greyShade,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  btnCircleUp: {
    width: wp(16),
    height: hp(8),
    borderRadius: hp(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    bottom: hp(4),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: wp(8),
    height: hp(4),
    tintColor: Colors.gray,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: wp(8),
    height: hp(4),
  },
  screen1: {
    flex: 1,
    backgroundColor: Colors.brownYellow,
  },
  screen2: {
    flex: 1,
    backgroundColor: Colors.blanchedAlmond,
  },
});
