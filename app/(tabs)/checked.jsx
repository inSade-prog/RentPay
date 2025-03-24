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

const Checked = () => {
  return (
    <SafeAreaView className="bg-dark-300 flex-1">
      <ScrollView>
        {/* Header */}
        <View>
          <View className="flex-row justify-between mx-10 my-5">
            <Text className="text-light font-bold text-2xl">History</Text>
            <Text className="text-primary-100 font-light font-2xl">
              {new Date().toLocaleDateString()}
            </Text>
          </View>

          {/* sub header: selection and delete icon */}

          <View className="flex-row-reverse">
            <View className="mx-10 my-5 mt-0">
              <TouchableOpacity>
                <Text className="font-light text-primary-100 ">Select All</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Icon name="trash" color={"red"} size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View className="m-2 mx-5">
            <MySearchBar textHolder="search" textHolderColor="#707070" />
          </View>

          {/* Table */}
          <View className="mb-20">
            <MyHistoryTable data={HistoryData} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checked;
