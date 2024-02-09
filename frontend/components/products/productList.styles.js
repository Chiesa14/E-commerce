import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  container: {
    flex: 1,
    paddingTop: SIZES.xxLarge,
    marginHorizontal: SIZES.xSmall / 2,
  },
  separator: {
    height: 10,
  },
});

export default styles;
