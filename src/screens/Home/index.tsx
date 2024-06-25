import { View, Text, Image, FlatList } from "react-native";

import { styles } from "./styles";
import { InfoItem } from "../../components/InfoItem";
import { TaskItem } from "../../components/TaskItem";
import { ButtonAdd } from "../../components/ButtonAdd";
import { InputHome } from "../../components/InputHome";
import { useState } from "react";

const logo = require("../../../assets/logo.png");
const clipboardIcon = require("../../../assets/clipboard.png");

interface ITask {
  id: number;
  description: string;
  finished: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.header_logo} />
      </View>
      <View style={styles.main}>
        <View style={styles.form}>
          <InputHome />
          <ButtonAdd />
        </View>
        <View style={styles.info_box}>
          <InfoItem type="created" value={0} />
          <InfoItem type="finished" value={0} />
        </View>
        <FlatList
          data={["1", "2", "3", "5", "6", "7", "8"]}
          horizontal={false}
          keyExtractor={(key) => key}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TaskItem value="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer." />
          )}
          ListEmptyComponent={() => (
            <View>
              <Image source={clipboardIcon} />
              <Text>Você ainda não tem tarefas cadastradas</Text>
              <Text>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
          style={{ direction: "ltr" }}
        />
      </View>
    </View>
  );
}
