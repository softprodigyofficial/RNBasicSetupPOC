import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Colors } from "../../utils/colors";

interface Props {
  centeredView: ViewStyle;
  modalView: ViewStyle;
  rowWithCenter: ViewStyle;
  iconStyle: ImageStyle;
  option: ViewStyle;
  textStyle: TextStyle;
}

export default StyleSheet.create<Props>({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: Colors.blackOpacity50,
  },
  modalView: {
    marginHorizontal: wp(3),
    marginBottom: hp(2),
    backgroundColor: Colors.white,
    borderRadius: hp(3),
    paddingVertical: hp(3),
    paddingHorizontal: wp(1),
    alignItems: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  rowWithCenter: {
    backgroundColor: Colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    width: wp(8),
    height: hp(8),
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    color: Colors.black,
    fontSize: hp(2.2),
  },
});
