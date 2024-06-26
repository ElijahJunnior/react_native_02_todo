import { Image, Text, View } from "react-native";

const clipboardIcon = require("../../../assets/clipboard.png");

export function ListEmptyItem() {
  return (
    <View>
      <Image source={clipboardIcon} />
      <Text>Você ainda não tem tarefas cadastradas</Text>
      <Text>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
