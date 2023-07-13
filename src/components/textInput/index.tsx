import { Text, View,TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Colors } from "../../utils/colors";

/**
 * Props for the InputField
 * @param placeholder
 * @param label
 * @param style
 * @param icon
 * @param value
 * @param onChangeText
 * @param onIconPress
 * @param secureTextEntry
 * @param hideState
 * @param error
 */

interface Input {
  placeholder?: string;
  label: string;
  style?: object;
  icon?: boolean;
  value: string;
  onChangeText?: any;
  onIconPress?: any;
  secureTextEntry?: boolean;
  hideState?: boolean;
  error?: boolean;
  errorMessage?: string;
  onEndEditing?: any;
  keyboardType?: boolean;
  disabled?: boolean;
  onFocus?: any;
  multiline?: boolean;
}
const InputField = (data: Input) => {
  const {
    disabled,
    placeholder,
    label,
    style,
    icon,
    value,
    onChangeText,
    onIconPress,
    secureTextEntry,
    hideState,
    error,
    errorMessage,
    onEndEditing,
    keyboardType,
    onFocus,
    multiline,
  } = data;
  return (
    <View>
       <TextInput
         placeholder={"Hi"}
         style={[styles.inputStyle]}
         returnKeyType="done"
         keyboardType={keyboardType ? "number-pad" : "default"}
         onChangeText={onChangeText}
      />
      {errorMessage && <Text style={styles.messageStyle}>{errorMessage}</Text>}
    </View>
  );
};

export default InputField;
