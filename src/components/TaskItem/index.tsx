import { Text, View } from "react-native";
import { styles } from "./styles";
import { ButtonDelete } from "../ButtonDelete";
import { Checkbox } from "../Checkbox";

interface IProps {
  description: string;
  finished?: boolean;
  onDelete?: () => void;
  onFinishedChange?: (isFinished: boolean) => void;
}

export function TaskItem({
  description,
  finished,
  onDelete,
  onFinishedChange,
}: IProps) {
  finished = finished != null ? finished : false;

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
  }

  return (
    <View style={containerStyle}>
      <Checkbox checked={finished} onPress={handleCheckPress} />
      <Text style={textStyle}>{description}</Text>
      <ButtonDelete onPress={onDelete} />
    </View>
  );
}
