import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { View } from "react-native";

import index from "../(tabs)/index";
import checked from "../(tabs)/checked";
import profile from "../(tabs)/profile";
import create from "../(tabs)/create";

const Tab = createBottomTabNavigator();

const TabsLayout = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#2F2F2F",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 56,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#606060",
          borderBottomWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={index}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center top-2">
              <Icon
                name="home"
                color={focused ? "#006EAD" : "#D0D2D3"}
                size={25}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={create}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center top-2">
              <Icon
                name="add-circle"
                color={focused ? "#006EAD" : "#D0D2D3"}
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Done"
        component={checked}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center top-2">
              <Icon
                name="checkmark-circle"
                color={focused ? "#006EAD" : "#D0D2D3"}
                size={30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="items-center justify-center top-2">
              <Icon
                name="settings"
                color={focused ? "#006EAD" : "#D0D2D3"}
                size={30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsLayout;
