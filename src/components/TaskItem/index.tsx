import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { ButtonDelete } from "../ButtonDelete";

export function TaskItem() {
  return (
    <View>
      <TouchableOpacity>
        <View></View>
      </TouchableOpacity>
      <Text></Text>
      <ButtonDelete />
    </View>
  );
}
