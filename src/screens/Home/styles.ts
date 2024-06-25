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
     width: 110, 
     height: 32 
  },
  main: {
    backgroundColor: colors.gray_600,
    paddingHorizontal: 16, 
    flex: 1
  },
  info_box: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  form: {
    flexDirection: "row",
    marginBottom: 32,
  },
  list: {

  }
})