import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  otpCon: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: 'yellow',
      marginVertical: wp(20),
  },
});
