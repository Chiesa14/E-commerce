import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 12,
  },
  image: {
    width: "90%",
    height: 250,
    resizeMode: "contain",
  },
  signInTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: SIZES.medium,
    alignSelf: "center",
  },
  signinContainer: {
    marginHorizontal: 12,
  },
  inputTitle: {
    textAlign: "right",
    fontSize: SIZES.xSmall,
    fontWeight: 600,
    paddingBottom: SIZES.xSmall,
  },
  input: {
    icon1: {
      marginHorizontal: 6,
    },
    text: {
      width: "80%",
    },
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    height: SIZES.xxLarge,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.small / 2,
  },
  signupBtnText: {
    color: COLORS.lightWhite,
    fontWeight: "bold",
  },
  signupBtn: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    marginTop: SIZES.small,
    justifyContent: "center",
  },
});

export default styles;
