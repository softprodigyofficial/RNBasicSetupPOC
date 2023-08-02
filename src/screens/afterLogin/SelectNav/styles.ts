import {StyleSheet} from 'react-native';
import { FontSize } from '../../../utils/dimension';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  tabSelect: {
    flex: 0.2,
    justifyContent: 'center',
    width: wp(60),
    alignItems: 'center',
  },tabButton: {color: 'blue', fontSize: FontSize.h3_1}
});
