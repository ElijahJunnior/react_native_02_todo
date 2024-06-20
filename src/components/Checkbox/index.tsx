import { TouchableHighlight } from "react-native";

import Icons from "@expo/vector-icons/MaterialIcons";
import { styles } from "./styles";

export function Checkbox() {
  return (
    <TouchableHighlight style={styles.container}>
      <Icons name="radio-button-unchecked" style={{ fontSize: 16 }} />
    </TouchableHighlight>
  );
}
