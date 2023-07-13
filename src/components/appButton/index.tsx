import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import { HalfLoader } from "../loader";

interface Props {
  text: string;
  onPress: () => void;
  buttonStyle?: any;
  titleStyle?: any;
  loader?: Boolean;
  isdisabled?: any;
  loaderColor?: string;
}

const AppButton = ({
  onPress,
  text = "",
  buttonStyle,
  titleStyle,
  loader = false,
  isdisabled = false,
  loaderColor,
}: Props) => {
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (disabled) {
      setTimeout(() => {
        setDisabled(false);
      }, 500);
    }
  }, [disabled]);

  return (
    <TouchableOpacity
      disabled={disabled || isdisabled}
      onPress={() => {
        setDisabled(true);
        onPress();
      }}
      style={[
        styles.button,
        buttonStyle,
        isdisabled && {
          opacity: 0.6,
        },
      ]}
    >
      {loader ? (
        <HalfLoader loaderColor={loaderColor} />
      ) : (
        <Text style={[styles.text, titleStyle]}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
