import {ImageStyle, StyleSheet, ViewStyle} from 'react-native';
import {Colors} from '../../utils/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

interface Props {
  container: ViewStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<Props>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: hp(12.5),
    borderWidth: 2,
    borderColor: Colors.primaryYellow,
  },
  image: {
    borderRadius: wp(20),
    borderWidth: 2,
  },
});

export default styles;
