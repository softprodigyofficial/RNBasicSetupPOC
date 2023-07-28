import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Colors } from '../../utils/colors';
import { FontSize } from '../../utils/dimension';


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: hp(100),
    width: wp(100),
  },
  textContainer: {
    position: 'absolute',
    bottom: hp(25),
    left: wp(6),
    right: wp(6),
  },
  title: {
    fontSize: FontSize.h3_5,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: hp(1),
  },
  description: {
    fontSize: FontSize.h2_1,
    color: Colors.white,
  },
  pagination: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  pagingText: {
    fontSize: FontSize.h1_5,
    color: Colors.lightGray,
    margin: wp(0.7),
  },
  pagingActiveText: {
    fontSize: FontSize.h1_5,
    color: Colors.errorRed,
    margin: wp(0.7),
  },
  progressRing: {
    bottom: 0,
    left: wp(20),
    position: 'absolute',
  },
});
