import { ActivityIndicator, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const NavigationMiddleware = () => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.navigate("Home");
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={COLORS.primary} size={100} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NavigationMiddleware;
