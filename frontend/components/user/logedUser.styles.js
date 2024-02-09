import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../constants";
const styles = StyleSheet.create({
  cover: {
    flexDirection: "column",
    alignItems: "center",
    text: {
      color: COLORS.primary,
      fontWeight: "bold",
    },
  },
  coverImage: {
    width: SIZES.width,
    height: 230,
    resizeMode: "cover",
  },
  profileImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
    borderRadius: SIZES.width,
    position: "relative",
    top: -70,
    borderWidth: 2,
    borderColor: COLORS.gray,
    marginBottom: -70,
  },
  user: {
    borderRadius: SIZES.xxLarge,
    backgroundColor: COLORS.secondary,
    text: {
      color: COLORS.gray,
      padding: SIZES.xSmall / 2,
    },
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
  list: {
    marginTop: SIZES.large,
    marginHorizontal: SIZES.small,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    paddingBottom: SIZES.xSmall,
  },
  listItem: {
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    alignItems: "center",
    text: {
      marginLeft: SIZES.large,
      color: COLORS.gray,
    },
    textDanger: {
      marginLeft: SIZES.large,
      color: COLORS.red,
    },
  },
  danger: {
    marginTop: SIZES.medium,
    marginHorizontal: SIZES.small,
  },
});

export default styles;
