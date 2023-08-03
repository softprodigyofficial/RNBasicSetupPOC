import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "../../utils/colors";

interface Props {
  button: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Props>({
  button: {
    width: wp(75),
    height: hp(6),
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    elevation: 5,
    borderRadius: hp(2),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  text: {
    fontSize: hp(1.8),
    color: Colors.white,
  },
});

export default styles;
