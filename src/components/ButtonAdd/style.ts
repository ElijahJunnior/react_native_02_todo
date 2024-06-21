import { StyleSheet } from "react-native"
import { colors } from "../../shared/colors_styles"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.blue_dark, 
    borderRadius: 6,
    height: 52,
    justifyContent: "center", 
    width: 52,
  },
  pressed_container: {
    backgroundColor: colors.blue_dark, 
  },
  icon: {
    color: colors.gray_200,
    fontSize: 16, 
  }
})