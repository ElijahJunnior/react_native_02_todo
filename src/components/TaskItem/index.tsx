import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { ButtonDelete } from "../ButtonDelete";
import { Checkbox } from "../Checkbox";
import { useState } from "react";

export function TaskItem() {
  const [checked, setChecked] = useState(false);

  return (
    <View>
      <TouchableOpacity>
        <View></View>
      </TouchableOpacity>
      <Text></Text>
      <ButtonDelete />
      <Checkbox
        checked={checked}
        onPress={() => setChecked((preview) => !preview)}
      />
    </View>
  );
}
