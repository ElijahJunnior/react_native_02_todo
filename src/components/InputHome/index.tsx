import { TextInput } from "react-native";
import { styles } from "./styles";

interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function InputHome({ value, onChange }: IProps) {
  return (
    <TextInput
      style={styles.input}
      value={value ?? ""}
      onChangeText={onChange}
    />
  );
}
