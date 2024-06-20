import { TouchableHighlight } from "react-native";
import { styles } from "./styles";

import Icons from "@expo/vector-icons/Feather";
import { colors } from "../../shared/colors_styles";
import { useState } from "react";

interface IProps {
  onPress?: () => void;
}

export function ButtonDelete({ onPress }: IProps) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableHighlight
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: pressed ? colors.gray_400 : "transparent",
      }}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <Icons
        name="trash-2"
        style={{
          fontSize: 16,
          color: pressed ? colors.danger : colors.gray_300,
        }}
      />
    </TouchableHighlight>
  );
}
