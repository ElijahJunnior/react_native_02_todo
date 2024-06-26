import { TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";

import Icons from "@expo/vector-icons/Feather";
import { useState } from "react";

interface IProps {
  onPress?: () => void;
}

export function ButtonDelete({ onPress }: IProps) {
  const [pressed, setPressed] = useState(false);

  const container_style = {
    ...styles.container,
    ...(pressed ? styles.container_pressed : {}),
  };

  const icon_style = {
    ...styles.icon,
    ...(pressed ? styles.icon_pressed : {}),
  };

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={container_style}>
        <Icons name="trash-2" style={icon_style} />
      </View>
    </TouchableWithoutFeedback>
  );
}
