import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import { MySearchBar } from "../../components/MySearchBar";
import { MyHistoryTable } from "../../components/MyHistoryTable";

const HistoryData = [
  { id: 1, name: "Clark", amount: 1500, phone: 123456789, paid: false },
  { id: 2, name: "Sarah", amount: 1500, phone: 123456789, paid: false },
  { id: 3, name: "Anthony", amount: 1500, phone: 123456789, paid: false },
  { id: 4, name: "John", amount: 1500, phone: 123456789, paid: false },
  { id: 5, name: "Casper", amount: 1500, phone: 123456789, paid: false },
];

const Checked = () => {
  return (
    <SafeAreaView className="bg-dark-300 flex-1">
      <ScrollView>
        <View>
          {/* Header content */}
          <View className="mx-9 my-9 flex-row justify-between">
            <Text className="text-light font-bold text-2xl items-center justify-center text-center">
              History
            </Text>
            <Text className="text-primary-100 font-light items-center justify-center text-center">
              {new Date().toLocaleDateString()}
            </Text>
          </View>

          {/* Delete */}
          <View className="flex-row-reverse gap-10">
            <View className="items-center justify-center flex-row-reverse gap-8 mr-5 bg-dark-100 p-1 rounded-full">
              <TouchableOpacity>
                <Text className="text-primary-100 font-light p-2">
                  Select All
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity className="items-center justify-center bg-dark-100 rounded-full p-2">
              <Icon name="trash" color={"#bb2124"} size={28} />
            </TouchableOpacity>
          </View>

          {/* Search Bar */}
          <View>
            <MySearchBar
              textHolder={"search history"}
              textHolderColor={"#707070"}
            />
          </View>

          {/* Table */}
          <View className="mt-5 h-full">
            <MyHistoryTable data={HistoryData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checked;
