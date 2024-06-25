import { TextInput } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

interface IProps {
  value?: string;
  onChange?: (value: string) => void;
}

export function InputHome({ value, onChange }: IProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      style={{
        ...styles.input,
        borderColor: isFocused
          ? styles.focused_input.borderColor
          : styles.input.borderColor,
      }}
      value={value ?? ""}
      onChangeText={onChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
}
