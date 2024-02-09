import { StyleSheet } from "react-native";
import { SIZES } from "../constants";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
    text: {
      fontWeight: "bold",
      fontSize: SIZES.large,
      marginLeft: SIZES.small,
    },
  },
});

export default styles;
