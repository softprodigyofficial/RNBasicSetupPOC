import React from "react";
import { ActivityIndicator, View } from "react-native";
import { Colors } from "../../utils/colors";
import styles from "./styles";

/**
 * Props for the loader
 * @param show
 */
interface LoaderProps {
  show: boolean;
}
export const Loader = (props: LoaderProps) => {
  if (!props.show) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.black} />
      </View>
    );
  }
};

export const HalfLoader = ({ loaderColor }: any) => (
  <ActivityIndicator
    size="small"
    color={loaderColor ? loaderColor : Colors.black}
  />
);
