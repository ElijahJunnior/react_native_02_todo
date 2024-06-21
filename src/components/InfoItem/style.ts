import { StyleSheet } from "react-native"
import { colors } from "../../shared/colors_styles"

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  description: {
    fontFamily: "InterBold",
    fontSize: 14,
    marginRight: 8,
  }, 
  value: {
    backgroundColor: colors.gray_400,
    borderRadius: 16,
    color: colors.gray_200, 
    fontFamily: "InterBold",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2
  }
})