import { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = async (userData) => {
    setUser(userData);
    await AsyncStorage.setItem("userData", JSON.stringify(userData));
  };

  const logout = async () => {
    await AsyncStorage.removeItem("userData");
    setUser(null);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const storedUserData = await AsyncStorage.getItem("userData");
      if (storedUserData) {
        setUser(JSON.parse(storedUserData));
      }
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser,logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
