import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./favoriteTile.styles";
import { Feather } from "@expo/vector-icons";

const FavoriteTile = ({ item }) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => {}}>
        <View style={styles.image}>
          <Image
            source={require("../../assets/images/bk.png")}
            style={styles.productImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>Kid's Bunk Bench</Text>
          <Text style={styles.supplier}>Playing Interiors</Text>
          <Text style={styles.supplier}>$799.99</Text>
        </View>
        <TouchableOpacity>
          <Feather name="trash" size={24} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteTile;
