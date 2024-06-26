import { StyleSheet } from "react-native"
import { colors } from "../../shared/colors_styles"

export const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.gray_500,
    borderColor: colors.gray_700,
    borderWidth: 1,
    borderRadius: 8,
    color: colors.gray_100,
    flex: 1,
    fontFamily: "InterRegular",
    fontSize: 16,
    height: 54,
    lineHeight: 20,
    padding: 16,
  }, 
  focused_input: { 
    borderColor: colors.purple_dark    
  },
})