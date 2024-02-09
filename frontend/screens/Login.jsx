import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import styles from "./login.styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "../hook/userContext";

const Login = ({ navigation }) => {
  const { updateUser } = useUser();
  const nav = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shown, setShown] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validate = async () => {
    const regex = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    try {
      if (!regex.test(email)) {
        throw new Error("Invalid email");
      }
      if (password.length < 6) {
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

  const togglePasswordVisibility = () => {
    setShown(!shown);
  };
  useEffect(() => {
    validate();
  });

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://192.168.0.242:3010/api/users/login",
        {
          email: email,
          password: password,
        }
      );
      setIsLoading(false);
      updateUser(response.data);
      nav.navigate("Home");
    } catch ({ response, error }) {
      setMessage(response.data);
      setIsLoading(true);
      setTimeout(() => {
        setMessage(null);
        setIsLoading(false);
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
            style={styles.Image}
          />
        </View>
        <View>
          <Text style={styles.loginTitle}>Unlimited Luxirious Furniture</Text>
          <View style={styles.loginContainer}>
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
                style={{ ...styles.input, ...styles.loginBtn }}
                onPress={() => handleSubmit()}
                disabled={error ? true : false || message ? true : false}
              >
                <Text style={styles.loginBtnText}>LOGIN</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("Register")}
            style={styles.register}
          >
            <Text>Don't have an Account? Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
