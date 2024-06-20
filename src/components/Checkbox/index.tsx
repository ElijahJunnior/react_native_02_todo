import { TouchableWithoutFeedback, View } from "react-native";

import Icons from "@expo/vector-icons/Feather";
import { styles } from "./styles";
import { useState } from "react";

interface IProps {
  onPress?: () => void;
  checked?: boolean;
}

export function Checkbox({ checked, onPress }: IProps) {
  const [pressed, setPressed] = useState(false);

  const state_style =
    checked === true
      ? pressed
        ? styles.checked_pressed
        : styles.checked_unpressed
      : pressed
      ? styles.unchecked_pressed
      : styles.unchecked_unpressed;

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={styles.container}>
        <View
          style={{
            ...styles.check,
            ...state_style,
          }}
        >
          {checked === true && <Icons name={"check"} style={styles.icon} />}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
