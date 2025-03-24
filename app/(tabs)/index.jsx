import { Image, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";

import { MySearchBar } from "../../components/MySearchBar";
import { MyTable } from "../../components/MyTable";

import profilePic from "../../assets/temp/profile.jpg";

const initData = [
  { id: 1, name: "Clark", amount: 1500, phone: 123456789, paid: false },
  { id: 2, name: "Sarah", amount: 1500, phone: 123456789, paid: false },
  { id: 3, name: "Anthony", amount: 1500, phone: 123456789, paid: false },
  { id: 4, name: "John", amount: 1500, phone: 123456789, paid: false },
  { id: 5, name: "Casper", amount: 1500, phone: 123456789, paid: false },
  { id: 6, name: "Sky", amount: 1500, phone: 123456789, paid: false },
  { id: 7, name: "Undertaker", amount: 1500, phone: 123456789, paid: false },
  { id: 8, name: "CM Punk", amount: 1500, phone: 123456789, paid: false },
  { id: 9, name: "BigShow", amount: 1500, phone: 123456789, paid: false },
  { id: 10, name: "Armadilo", amount: 1500, phone: 123456789, paid: false },
  { id: 11, name: "Dido", amount: 1500, phone: 123456789, paid: false },
  { id: 12, name: "ComputerGuy", amount: 1500, phone: 123456789, paid: false },
  { id: 13, name: "Sosig", amount: 1500, phone: 123456789, paid: false },
  { id: 14, name: "Sigma", amount: 1500, phone: 123456789, paid: false },
  { id: 15, name: "King", amount: 1500, phone: 123456789, paid: false },
  { id: 16, name: "Burger", amount: 1500, phone: 123456789, paid: false },
  { id: 17, name: "FingerFries", amount: 1500, phone: 123456789, paid: false },
  { id: 18, name: "Dream", amount: 1500, phone: 123456789, paid: false },
  { id: 19, name: "GameBoy", amount: 1500, phone: 123456789, paid: false },
];

const Index = () => {
  const router = useRouter();
  return (
    <View className="flex-1 bg-dark-200">
      <StatusBar style="light" />
      <SafeAreaView className="flex-1">
        {/* Profile Section */}
        <View className="flex bg-dark-100 rounded-full flex-row justify-between h-20 mx-4 mt-5 border border-borderColor border-b-0">
          <View>
            <Text className="text-white font-bold mt-5 ml-9">Hi, David</Text>
            <Text className="text-primary-100 font-light ml-9">
              Manage your rents
            </Text>
          </View>
          <View className="justify-center items-center mr-3">
            <Image
              source={profilePic}
              className="w-14 h-14 rounded-full border-2 border-light"
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Search Bar */}
        <View className="flex-row justify-between ">
          <View className="m-4 mb-0 w-[70%]">
            <MySearchBar
              textHolder="Search for person or shop..."
              textHolderColor="#707070"
              icon={"search"}
            />
          </View>
          <View className="items-center justify-center mx-4 mt-2">
            <TouchableOpacity onPress={() => router.push("/create")}>
              <Icon name="add-circle" color={"#006EAD"} size={42} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Date Text */}
        <View className="w-full px-5 py-2">
          <Text className="text-right text-primary-100">
            Date: {new Date().toLocaleDateString()}
          </Text>
        </View>

        {/* Scrollable Main Content */}
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 80 }}
        >
          <MyTable data={initData} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Index;
