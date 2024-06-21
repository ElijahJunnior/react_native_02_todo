import { Text, View } from "react-native";

import { styles } from "./styles";
import { ButtonDelete } from "../ButtonDelete";
import { Checkbox } from "../Checkbox";
import { useState } from "react";

interface IProps {
  value: string;
  onDelete?: () => void;
}

export function TaskItem({ value, onDelete }: IProps) {
  const [checked, setChecked] = useState(false);

  const textStyle = checked
    ? { ...styles.text, ...styles.finished_text }
    : styles.text;

  const containerStyle = checked
    ? { ...styles.container, ...styles.finished_container }
    : { ...styles.container };

  return (
    <View style={containerStyle}>
      <Checkbox
        checked={checked}
        onPress={() => setChecked((preview) => !preview)}
      />
      <Text style={textStyle}>{value}</Text>
      <ButtonDelete onPress={onDelete} />
    </View>
  );
}
