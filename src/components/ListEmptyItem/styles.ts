import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors_styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.gray_400,
    borderTopWidth: 1, 
    paddingVertical: 48
  }, 
  image: {
    width: 56,
    height: 56,
    marginBottom: 16,
  },
  title: {
    color: colors.gray_300,
    fontFamily: "InterBold",
    fontSize: 14,
    lineHeight: 20,

  },
  headline: {
    color: colors.gray_300, 
    fontFamily: "InterRegular",
    fontSize: 14,
    lineHeight: 20,
  }
})