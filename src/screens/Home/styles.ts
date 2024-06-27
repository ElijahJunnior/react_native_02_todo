import { StyleSheet } from "react-native";

import { colors } from "../../shared/colors_styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray_700,
    flex: 1,
  },
  header: {    
    alignItems: "center",
    height: 173,
    justifyContent: "center",
    marginTop: 24,    
  },
  header_logo: {
    height: 32,
    width: 110, 
  },
  main: {
    backgroundColor: colors.gray_600,
    flex: 1,
    paddingHorizontal: 16,
    position: "relative"
  },
  form: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
    marginBottom: 5,
    position: "relative",
    top: -27
  },
  info_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  list: {
    direction: "ltr" 
  }
})