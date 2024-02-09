import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, Text, View, ScrollView } from "react-native";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import styles from "./home.style";
import { Welcome } from "../components";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/products/ProductRow";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useUser } from "../hook/userContext";

const Home = () => {
  const navigation = useNavigation();
  const { user } = useUser();
  return (
    <SafeAreaView>
      <View style={styles.appWrapper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={styles.location}>{user ? user.location : "China"}</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>0</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate(user ? "Cart" : "Login")}
            >
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ marginBottom: 50 }}>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
