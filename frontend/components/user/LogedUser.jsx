import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./logedUser.styles";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";
const LogedUser = () => {
  const handlePressModel = () => {
    console.warn("Clicked");
  };
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.cover}>
        <Image
          source={require("../../assets/images/space.jpg")}
          style={styles.coverImage}
        />
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => handlePressModel()}
          style={styles.UserImageDetails}
        >
          <Image
            source={require("../../assets/images/profile.jpeg")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <Text style={styles.cover.text}>Chiesa</Text>
        <TouchableOpacity style={styles.user} onPress={() => {}}>
          <Text style={styles.user.text}>Chiesa@gmail.com</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: SIZES.small }}>
        <TouchableOpacity
          style={styles.list}
          onPress={() => navigation.navigate("Favorites")}
        >
          <View style={styles.listItem}>
            <Ionicons name="heart-outline" size={24} color={COLORS.gray} />
            <Text style={styles.listItem.text}>Favorites</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <View style={styles.listItem}>
            <MaterialCommunityIcons
              name="truck-delivery-outline"
              size={24}
              color={COLORS.gray}
            />
            <Text style={styles.listItem.text}>Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons name="cart-outline" size={24} color={COLORS.gray} />
            <Text style={styles.listItem.text}>Cart</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <View style={styles.listItem}>
            <Feather name="refresh-ccw" size={24} color={COLORS.gray} />
            <Text style={styles.listItem.text}>Clear Cashe</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.list}>
          <View style={styles.listItem}>
            <Ionicons
              name="person-remove-outline"
              size={24}
              color={COLORS.gray}
            />
            <Text style={styles.listItem.textDanger}>Delete Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.danger}>
          <View style={styles.listItem}>
            <Feather name="log-out" size={24} color={COLORS.gray} />
            <Text style={styles.listItem.textDanger}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogedUser;
