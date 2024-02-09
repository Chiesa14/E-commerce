import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from "../constants";
import { Profile, Search, Home } from "../screens";



const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle:{
        positon: "absolute",
        bottom : 0,
        rigth: 0,
        left: 0,
        elevation: 0,
        height : 50
    }
}

const BottomTabNavigation = () =>{
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon : ({focused})=>(
                        <Ionicons name={focused ? "home" : "home-outline"} color={focused ? COLORS.primary : COLORS.gray2 } size={24}/>
                    )
                }}
            />
            <Tab.Screen 
                name="Search"
                component={Search}
                options={{
                    tabBarIcon : ({focused})=>(
                        <Ionicons name={"search-sharp"} color={focused ? COLORS.primary : COLORS.gray2 } size={24}/>
                    )
                }}
            />
            <Tab.Screen 
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon : ({focused})=>(
                    <Ionicons name={focused ? "person" : "person-outline"} color={focused ? COLORS.primary : COLORS.gray2 } size={24}/>
                )
            }}
        />
        </Tab.Navigator>
    )
}

export default BottomTabNavigation;