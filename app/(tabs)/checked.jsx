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
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checked;
