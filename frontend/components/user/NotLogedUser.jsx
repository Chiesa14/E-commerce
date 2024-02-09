import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./notLogedUser.styles";
import { useNavigation } from "@react-navigation/native";

const NotLogedUser = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.cover}>
      <Image
        source={require("../../assets/images/space.jpg")}
        style={styles.coverImage}
      />
      <Image
        source={require("../../assets/images/profile.jpeg")}
        style={styles.profileImage}
      />
      <Text style={styles.cover.text}>Please login into your account</Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.loginBtn.text}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotLogedUser;