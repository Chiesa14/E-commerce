import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import styles from "./favorite.styles";
import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";
import { FavoriteTile } from "../components";

const Favorites = ({ navigation }) => {
  const [favlist, setFavList] = useState([1, 2]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <Text style={styles.nav.text}>Favorites</Text>
      </View>
      <FlatList
        data={favlist}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <FavoriteTile item={item} />}
        style={{ marginHorizontal: 12 }}
      />
    </SafeAreaView>
  );
};

export default Favorites;
