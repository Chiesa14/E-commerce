import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 12,
  },
  Image: {
    width: "90%",
    height: 350,
    resizeMode: "contain",
  },
  loginTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: SIZES.medium,
    alignSelf: "center",
  },
  loginContainer: {
    marginHorizontal: 12,
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
  loginBtn: {
    backgroundColor: COLORS.primary,
    alignItems: "center",
    marginTop: SIZES.small,
    justifyContent: "center",
  },
  loginBtnText: {
    color: COLORS.lightWhite,
    fontWeight: "bold",
  },
  inputTitle: {
    textAlign: "right",
    fontSize: SIZES.xSmall,
    fontWeight: 600,
    paddingBottom: SIZES.xSmall,
  },
  register: {
    marginTop: SIZES.xLarge,
    alignItems: "center",
  },

});

export default styles;
