import { StyleSheet } from "react-native";
import { colors } from "../../shared/colors_styles";

export const styles = StyleSheet.create({ 
  container: {
    alignItems: "center", 
    backgroundColor: colors.gray_500,
    borderRadius: 8,
    borderColor: colors.gray_400,
    borderWidth: 1, 
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  text: {
    color: colors.gray_100,
    fontFamily: "InterRegular",
    fontSize: 14,
    lineHeight: 19,
    flex: 1
    // maxWidth: "75%",
  }, 
  finished_container: {
    borderColor: colors.gray_500
  },
  finished_text: {
    color: colors.gray_300,
    textDecorationLine: "line-through"
  }
})