import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Icons from "@expo/vector-icons/MaterialIcons";

import { styles } from "./style";
import { useState } from "react";

interface IProps {
  onPress?: () => void;
}

export function ButtonAdd({ onPress }: IProps) {
  const [isPressed, setIsPressed] = useState(false);

  const containerStyle = isPressed
    ? { ...styles.container, ...styles.pressed_container }
    : { ...styles.container };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={containerStyle}>
        <Icons name="add-circle-outline" style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
}
