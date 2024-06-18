import { StyleSheet } from "react-native";

import { colors } from "../../shared/colors_styles";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray_600,
    flex: 1,
  },
  header: {    
    alignItems: "center",
    backgroundColor: colors.gray_700,
    height: 173,
    justifyContent: "center"
  },
  header_logo: {
     width: 110, height: 32 
  },
  helloText: {
    color: colors.gray_100
  }
})