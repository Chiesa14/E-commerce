import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
    marginHorizontal: SIZES.xSmall/3,
  },
  imageContainer: {
    flex: 1,
    width: 170,
    marginLeft: SIZES.xSmall / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: SIZES.small,
  },
  title: {
    fontWeight: "bold",
    fontSize: SIZES.xLarge,
    marginBottom: 2,
  },
  supplier: {
    fontWeight: "normal",
    fontSize: SIZES.xSmall,
    color: COLORS.gray,
  },
  price: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.xSmall,
    right: SIZES.xSmall,
  },
});

export default styles;
