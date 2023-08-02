import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors} from "../../utils/colors";
import { FontSize } from "../../utils/dimension";

export const styles = StyleSheet.create({
  input: {
    width: wp(75),
    textAlignVertical: 'center',
    paddingVertical: wp(2),
    paddingHorizontal: wp(4),
    borderWidth: 1,
    marginVertical: hp(2),
    borderRadius: hp(2),
  },
  errorInput: {
    borderColor: Colors.errorRed,
  },
  errorText: {
    bottom: hp(1.5),
    color: Colors.errorRed,
    alignSelf: 'flex-start',
    left: wp(3),
    fontSize: FontSize.h1_6,
  },
  iconContainer: {
    position: 'absolute',
    left: wp(65),
    top: hp(4)
  },
});