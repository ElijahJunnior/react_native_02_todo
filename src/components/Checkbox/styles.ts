import { StyleSheet } from "react-native"; 
import { colors } from "../../shared/colors_styles";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: 32,
    justifyContent: "center",
    width: 32, 
  }, 
  check: {
    alignItems: "center",
    borderRadius: 16,
    borderStyle: "solid",
    borderWidth: 1,
    height: 16,
    justifyContent: "center",
    width: 16,
  },
  checked_pressed: {
    backgroundColor: colors.purple,
    borderColor: colors.purple
  },
  unchecked_pressed: {
    backgroundColor: colors.blue_dark + "33",
    borderColor: colors.blue_dark
  },
  checked_unpressed: {
    backgroundColor: colors.purple_dark,
    borderColor: colors.purple_dark

  },
  unchecked_unpressed: {  
    backgroundColor: "transparent",
    borderColor: colors.blue
  },
  icon: {
    fontSize: 10,
    color: colors.gray_100
  }

})