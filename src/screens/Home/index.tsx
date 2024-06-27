import { View, Image, FlatList } from "react-native";

import { styles } from "./styles";
import { InfoItem } from "../../components/InfoItem";
import { TaskItem } from "../../components/TaskItem";
import { ButtonAdd } from "../../components/ButtonAdd";
import { InputHome } from "../../components/InputHome";
import { useState } from "react";
import { ListEmptyItem } from "../../components/ListEmptyItem";

const logo = require("../../../assets/logo.png");

interface ITask {
  id: number;
  description: string;
  finished: boolean;
}

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  function createTask() {
    if (inputValue === "") {
      return;
    }

    const task: ITask = {
      id: tasks.length + 1,
      description: inputValue,
      finished: false,
    };

    setTasks((cur) => [task, ...cur]);

    setInputValue("");
  }

  function setTaskFinished(task_id: number, state: boolean) {
    const this_tasks = [...tasks];

    const task = this_tasks.find((cur) => cur.id === task_id);

    if (task != null) {
      task.finished = state;

      setTasks(this_tasks);
    }
  }

  function deleteTask(task_id: number) {
    const this_tasks = [...tasks];

    const ind_task = tasks.findIndex((cur) => cur.id === task_id);

    this_tasks.splice(ind_task);

    setTasks(this_tasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.header_logo} />
      </View>
      <View style={styles.main}>
        <View style={styles.form}>
          <InputHome
            value={inputValue}
            onChange={(text) => setInputValue(text)}
          />
          <ButtonAdd onPress={createTask} />
        </View>
        <View style={styles.info_box}>
          <InfoItem
            type="created"
            value={tasks.filter((cur) => !cur.finished).length}
          />
          <InfoItem
            type="finished"
            value={tasks.filter((cur) => cur.finished).length}
          />
        </View>
        <FlatList
          data={tasks}
          horizontal={false}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TaskItem
              description={item.description}
              finished={item.finished}
              onFinishedChange={(state) => setTaskFinished(item.id, state)}
              onDelete={() => deleteTask(item.id)}
            />
          )}
          ListEmptyComponent={ListEmptyItem}
          style={styles.list}
        />
      </View>
    </View>
  );
}
