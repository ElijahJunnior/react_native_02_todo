import { Text, View } from "react-native";
import { styles } from "./style";
import { colors } from "../../shared/colors_styles";

interface IProps {
  type: "created" | "finished";
  value: number;
}

export function InfoItem({ value, type }: IProps) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          ...styles.description,
          color: type === "created" ? colors.blue : colors.purple,
        }}
      >
        {type === "created" ? "Criadas" : "Concluídas"}
      </Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}
