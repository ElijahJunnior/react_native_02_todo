import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors_styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 4,
    height: 32,
    justifyContent: "center", 
    width: 32,
  },
  container_pressed: {
    backgroundColor: colors.gray_400
  },
  icon: {
    fontSize: 16,
    color: colors.gray_300,
  }, 
  icon_pressed: {
    color: colors.danger
  }
}) 