import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { Colors} from "../../utils/colors";

export const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: Colors.white,
    marginTop: heightPercentageToDP(1.5),
    textAlignVertical: "center",
  },
  messageStyle: {
    color: Colors.invalid,
  },
});
