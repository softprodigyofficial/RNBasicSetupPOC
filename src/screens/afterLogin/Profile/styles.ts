import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors} from '../../../utils/colors';
import {FontSize} from '../../../utils/dimension';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: hp(80),
    backgroundColor: Colors.white,
  },
  iconStyle: {
    backgroundColor: Colors.primaryYellow,
    borderColor: 'red',
    position: 'absolute',
    height: hp(3),
    width: wp(6),
    right: 0,
    bottom: hp(1.25),
    borderRadius: hp(3),
  },
  profileTitle: {
    height: hp(6),
    justifyContent: 'center',
    backgroundColor: Colors.whiteSmoke,
    paddingHorizontal: wp(3),
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: FontSize.h1_8,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: Colors.gray91,
  },
  submitBtn: {backgroundColor: Colors.primaryYellow, width: wp(80)},
  btnTitle: {fontWeight: 'bold', color: Colors.black},
  marginH10: {marginHorizontal: wp(2)},
  marginV3: {marginVertical: hp(3)},
});
