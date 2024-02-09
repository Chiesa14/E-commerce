import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
    height: 250,
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
  loginBtn: {
    width: 80,
    height: 30,
    borderRadius: SIZES.xxLarge,
    backgroundColor: COLORS.secondary,
    text: {
      color: COLORS.gray,
    },
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.gray,
  },
});

export default styles;
