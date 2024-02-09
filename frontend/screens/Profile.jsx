import { View } from "react-native";
import { LogedUser, NotLogedUser } from "../components";
import { useEffect, useState } from "react";
import { useUser } from "../hook/userContext";

const Profile = ({ route }) => {
  const { user } = useUser();
  return <View>{user ? <LogedUser /> : <NotLogedUser />}</View>;
};
export default Profile;
