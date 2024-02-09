import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import styles from "./register.styles";
import { TouchableOpacity } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../hook/userContext";

const Register = ({ navigation }) => {
  const { updateUser } = useUser();
  const nav = useNavigation();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [shown, setShown] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const validate = async () => {
    const regex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    try {
      if (!username) {
        throw new Error("Invalid username");
      }
      if (!regex.test(email)) {
        throw new Error("Invalid email");
      }
      if (!location) {
        throw new Error("Please enter a  location");
      }
      if (password.length < 8) {
        throw new Error("Invalid password. Must be at least 8 characters");
      }

      if (email.indexOf(" ") >= 0) {
        throw new Error("Invalid email. No spaces allowed");
      }
      if (!password.match(/[a-z]/)) {
        throw new Error("Password must contain at least one lowercase letter");
      }

      if (!password.match(/[A-Z]/)) {
        throw new Error("Password must contain at least one uppercase letter");
      }

      if (!password.match(/[0-9]/)) {
        throw new Error("Password must contain at least one number");
      }

      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    validate();
  });

  const togglePasswordVisibility = () => {
    setShown(!shown);
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.242:3010/api/users/register",
        {
          username: username,
          email: email,
          password: password,
          location: location,
        }
      );
      setIsLoading(false);
      updateUser(response.data);
      nav.navigate("Home");
    } catch ({ response, error }) {
      setMessage(response.data);
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity>
            <Ionicons
              name="chevron-back-circle-outline"
              size={30}
              onPress={() => navigation.goBack()}
            />
          </TouchableOpacity>
          <Image
            source={require("../assets/images/bk.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.signInTitle}>Sign up and start shopping</Text>
        <View style={styles.signinContainer}>
          <Text style={styles.inputTitle}>Username</Text>
          <View style={styles.input}>
            <MaterialIcons
              name="face"
              size={20}
              color={COLORS.gray}
              style={styles.input.icon1}
            />
            <TextInput
              placeholder="Username"
              style={styles.input.text}
              value={username}
              onChangeText={setUserName}
            />
          </View>
          <Text style={styles.inputTitle}>Email</Text>
          <View style={styles.input}>
            <Feather
              name="mail"
              size={20}
              color={COLORS.gray}
              style={styles.input.icon1}
            />
            <TextInput
              placeholder="Email"
              style={styles.input.text}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <Text style={styles.inputTitle}>Location</Text>
          <View style={styles.input}>
            <Ionicons
              name="location-outline"
              color={COLORS.gray}
              size={20}
              style={styles.input.icon1}
            />
            <TextInput
              placeholder="Location"
              style={styles.input.text}
              value={location}
              onChangeText={setLocation}
            />
          </View>
          <Text style={styles.inputTitle}>Password</Text>
          <View style={styles.input}>
            <MaterialIcons
              name="lock-outline"
              color={COLORS.gray}
              size={20}
              style={styles.input.icon1}
            />
            <TextInput
              placeholder="Password"
              style={styles.input.text}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={shown}
            />
            <Feather
              name={shown ? "eye-off" : "eye"}
              size={20}
              color={COLORS.gray2}
              onPress={togglePasswordVisibility}
            />
          </View>
          <Text style={{ color: "red" }}>
            {error}
            {message}
          </Text>
          {isLoading ? (
            <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
          ) : (
            <TouchableOpacity
              style={{ ...styles.input, ...styles.signupBtn }}
              onPress={() => handleSubmit()}
              disabled={error ? true : false || message ? true : false}
            >
              <Text style={styles.signupBtnText}>SIGNUP</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Register;
