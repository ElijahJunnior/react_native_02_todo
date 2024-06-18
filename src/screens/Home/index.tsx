import { View, Text, Image, ImageBackground } from "react-native";

import { styles } from "./styles";

const logo = require("../../../assets/logo.png");

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.header_logo} />
      </View>
      <Text style={styles.helloText}>Hello World</Text>
    </View>
  );
}
