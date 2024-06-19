import { TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

const trashIcon = require("../../../assets/trash-gray.png");

interface IProps {
  onPress?: () => void;
}

export function ButtonDelete({ onPress }: IProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={trashIcon} style={styles.icon} />
    </TouchableOpacity>
  );
}
