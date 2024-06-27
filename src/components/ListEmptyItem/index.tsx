import { Image, Text, View } from "react-native";
import { styles } from "./styles";

const clipboardIcon = require("../../../assets/clipboard.png");

export function ListEmptyItem() {
  return (
    <View style={styles.container}>
      <Image source={clipboardIcon} style={styles.image} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.headline}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
