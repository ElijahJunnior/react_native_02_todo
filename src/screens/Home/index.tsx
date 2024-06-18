import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

const logo = require("../../../assets/logo.png");

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.header_logo} />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button} />
      </View>
    </View>
  );
}
