import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { styles } from "./styles";
import { InfoItem } from "../../components/InfoItem";
import { TaskItem } from "../../components/TaskItem";

const logo = require("../../../assets/logo.png");
const addIcon = require("../../../assets/add.png");
const clipboardIcon = require("../../../assets/clipboard.png");

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.header_logo} />
      </View>
      <View style={styles.main}>
        <View style={styles.form}>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button}>
            <Image source={addIcon} style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.info_box}>
          <InfoItem type="created" value={0} />
          <InfoItem type="finished" value={0} />
        </View>
        <FlatList
          data={[]}
          keyExtractor={(key) => key}
          renderItem={({ item }) => <TaskItem />}
          ListEmptyComponent={() => (
            <View>
              <Image source={clipboardIcon} />
              <Text>Você ainda não tem tarefas cadastradas</Text>
              <Text>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
