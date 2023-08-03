import {StyleSheet} from 'react-native';
import { FontSize } from '../../../utils/dimension';
import { Colors } from '../../../utils/colors';

export default StyleSheet.create({
  containerSelect: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  navOpt: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navName: {color: Colors.dodgerBlue, fontSize: FontSize.h3_1},
});
