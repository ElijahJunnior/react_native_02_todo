import { Text, View } from "react-native";

import { styles } from "./styles";
import { ButtonDelete } from "../ButtonDelete";
import { Checkbox } from "../Checkbox";
import { useState } from "react";

interface IProps {
  value: string;
  onDelete?: () => void;
  onFinishedChange?: (isFinished: boolean) => void;
}

export function TaskItem({ value, onDelete, onFinishedChange }: IProps) {
  const [finished, setFinished] = useState(false);

  const textStyle = finished
    ? { ...styles.text, ...styles.finished_text }
    : styles.text;

  const containerStyle = finished
    ? { ...styles.container, ...styles.finished_container }
    : { ...styles.container };

  function handleCheckPress() {
    const isFinished = !finished;

    if (onFinishedChange != null) {
      onFinishedChange(isFinished);
    }

    setFinished(isFinished);
  }

  return (
    <View style={containerStyle}>
      <Checkbox checked={finished} onPress={handleCheckPress} />
      <Text style={textStyle}>{value}</Text>
      <ButtonDelete onPress={onDelete} />
    </View>
  );
}
